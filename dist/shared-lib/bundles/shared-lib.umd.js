(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('uuid'), require('@angular/material'), require('@angular/core'), require('@angular/common'), require('forms-lib'), require('@angular/material/toolbar'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('shared-lib', ['exports', 'uuid', '@angular/material', '@angular/core', '@angular/common', 'forms-lib', '@angular/material/toolbar', '@angular/material/button'], factory) :
    (factory((global['shared-lib'] = {}),global.Uuid,global.ng.material,global.ng.core,global.ng.common,global.FormsLib,global.ng.material.toolbar,global.ng.material.button));
}(this, (function (exports,uuid,material,i0,common,formsLib,toolbar,button) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
     * Adapted from https://stackoverflow.com/a/55365334/1667410
     */
    var UuidService = /** @class */ (function () {
        function UuidService() {
            this.idCache = [];
        }
        /**
         * @param {?=} url
         * @return {?}
         */
        UuidService.prototype.generate = /**
         * @param {?=} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var isUnique = false;
                /** @type {?} */
                var tempId = '';
                if (url) {
                    tempId = uuid.v5(url, uuid.v5.URL);
                }
                else {
                    tempId = uuid.v4();
                }
                while (!isUnique) {
                    if (!this.idExists(tempId)) {
                        isUnique = true;
                    }
                }
                // console.log(this.idCache);
                return tempId;
            };
        /**
         * @param {?} id
         * @return {?}
         */
        UuidService.prototype.cache = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.idCache.push(id);
            };
        /**
         * @param {?} id
         * @return {?}
         */
        UuidService.prototype.release = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                /** @type {?} */
                var index = this.idCache.indexOf(id);
                this.idCache.splice(index, 1);
            };
        /**
         * @private
         * @param {?} id
         * @return {?}
         */
        UuidService.prototype.idExists = /**
         * @private
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.idCache.includes(id);
            };
        UuidService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        UuidService.ctorParameters = function () { return []; };
        /** @nocollapse */ UuidService.ngInjectableDef = i0.defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });
        return UuidService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Dialog = /** @class */ (function () {
        function Dialog(title, message) {
            this.title = title;
            this.message = message;
        }
        return Dialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiConfirmComponent = /** @class */ (function () {
        function UiConfirmComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.title = data.title;
            this.message = data.message;
        }
        /**
         * @return {?}
         */
        UiConfirmComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        UiConfirmComponent.prototype.onConfirm = /**
         * @return {?}
         */
            function () {
                // Close the dialog, return true
                this.dialogRef.close(true);
            };
        /**
         * @return {?}
         */
        UiConfirmComponent.prototype.onDismiss = /**
         * @return {?}
         */
            function () {
                // Close the dialog, return false
                this.dialogRef.close(false);
            };
        UiConfirmComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ui-confirm',
                        template: "<h1 mat-dialog-title>\n  {{title}}\n</h1>\n\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onDismiss()\">No</button>\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Yes</button>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        UiConfirmComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: Dialog, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return UiConfirmComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { UiConfirmComponent } from '../ui-confirm/ui-confirm.component';
    var UiListComponent = /** @class */ (function () {
        function UiListComponent() {
            this.hideCols = ['uuid'];
            this.display = [];
            this.datasetChange = new i0.EventEmitter();
            this.currentChange = new i0.EventEmitter();
            this.edit = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        UiListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setColumns();
            };
        /*
         * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
         */
        /*
           * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
           */
        /**
         * @return {?}
         */
        UiListComponent.prototype.sortDisabled = /*
           * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
           */
            /**
             * @return {?}
             */
            function () {
                return 0;
            };
        /**
         * @return {?}
         */
        UiListComponent.prototype.setColumns = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var now;
                this.current.subscribe(( /**
                 * @param {?} curr
                 * @return {?}
                 */function (curr) { return now = curr; }));
                this.headers = Object.keys(now);
                this.headers.forEach(( /**
                 * @param {?} header
                 * @return {?}
                 */function (header) {
                    /** @type {?} */
                    var displayType = 'table-cell';
                    /** @type {?} */
                    var hidden = _this.hideCols.find(( /**
                     * @param {?} col
                     * @return {?}
                     */function (col) { return col === header; }));
                    if (hidden) {
                        displayType = 'none';
                    }
                    _this.display.push(displayType);
                }));
            };
        /**
         * @param {?} record
         * @return {?}
         */
        UiListComponent.prototype.setCurrent = /**
         * @param {?} record
         * @return {?}
         */
            function (record) {
                this.currentChange.emit(record);
            };
        /**
         * @param {?} record
         * @return {?}
         */
        UiListComponent.prototype.editRecord = /**
         * @param {?} record
         * @return {?}
         */
            function (record) {
                this.edit.emit(record);
            };
        /**
         * @param {?} record
         * @return {?}
         */
        UiListComponent.prototype.deleteRecord = /**
         * @param {?} record
         * @return {?}
         */
            function (record) {
                // this.confirmationService.confirm({
                //   message: 'Are you sure that you want to delete this record',
                //   header: 'Delete record',
                //   icon: 'pi pi-exclamation-triangle',
                //   accept: () => {
                this.delete.emit(record);
                //   }
                // });
            };
        UiListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ui-list',
                        template: "<ng-container *ngIf=\"(dataset | async) as data; else loading\">\n<!-- <p-table [value]=\"data\" autoLayout=\"true\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Current</th>\n      <th *ngFor=\"let header of headers; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ header | titlecase}}</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-record>\n    <tr>\n      <td><button title=\"uuid: {{record.uuid}}\" (click)=\"setCurrent(record)\" pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" [ngClass]=\"{'ui-state-active': record.uuid === (current | async).uuid }\"></button></td>\n      <td *ngFor=\"let field of record | keyvalue:sortDisabled; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ field.value }}</td>\n      <td><button (click)=\"editRecord(record)\" pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"left\"></button></td>\n      <td><button (click)=\"deleteRecord(record)\" pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"left\"></button></td>\n    </tr>\n  </ng-template>\n</p-table> -->\n</ng-container>\n<ng-template #loading>Workspace List loading...</ng-template>\n<ui-confirm></ui-confirm>  \n",
                        styles: [".ui-icon{padding:0 14px}.ui-spacer{flex:1 1 auto}:host ::ng-deep th{text-align:left}"]
                    }] }
        ];
        /** @nocollapse */
        UiListComponent.ctorParameters = function () { return []; };
        UiListComponent.propDecorators = {
            dataset: [{ type: i0.Input }],
            datasetChange: [{ type: i0.Output }],
            current: [{ type: i0.Input }],
            currentChange: [{ type: i0.Output }],
            edit: [{ type: i0.Output }],
            delete: [{ type: i0.Output }]
        };
        return UiListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiEditorComponent = /** @class */ (function () {
        function UiEditorComponent(formsService) {
            this.formsService = formsService;
            this.delete = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
            this.update = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        UiEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.record) {
                    console.log('No record supplied!');
                }
                this.createForm();
            };
        /**
         * @return {?}
         */
        UiEditorComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.model = Object.assign({}, this.record);
                if (this.create) {
                    this.submitLabel = 'Create';
                }
                else {
                    this.submitLabel = 'Update';
                }
            };
        /**
         * @private
         * @return {?}
         */
        UiEditorComponent.prototype.createForm = /**
         * @private
         * @return {?}
         */
            function () {
                this.form = new formsLib.FormGroup({});
                this.fields = this.formsService.getModelFields(this.model);
                this.options = {};
            };
        /**
         * @param {?} model
         * @return {?}
         */
        UiEditorComponent.prototype.deleteRecord = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                this.delete.emit(model);
            };
        /**
         * @param {?} model
         * @return {?}
         */
        UiEditorComponent.prototype.cancelEdit = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                this.cancel.emit(model);
            };
        /**
         * @param {?} model
         * @return {?}
         */
        UiEditorComponent.prototype.updateRecord = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                this.update.emit(model);
            };
        UiEditorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ui-editor',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"updateRecord(model)\">\n  <formly-form [form]=\"form\" [fields]=\"fields\" [options]=\"options\" [model]=\"model\"></formly-form>\n  <mat-toolbar>\n    <span>\n      <button mat-stroked-button type=\"button\" *ngIf=\"!create\" (click)=\"deleteRecord(model)\" class=\"btn btn-default\" icon=\"pi pi-check\">Delete</button>\n    </span>\n    <span class=\"ui-spacer\"></span>\n    <span>\n      <button mat-stroked-button type=\"button\" (click)=\"cancelEdit(model)\"  class=\"btn btn-default\" icon=\"pi pi-check\">Cancel</button>\n      <button mat-stroked-button type=\"submit\" class=\"btn btn-default\" icon=\"pi pi-save\">{{submitLabel}}</button>\n    </span>\n  </mat-toolbar>\n</form>\n<pre>{{form.value | json}}</pre>\n"
                    }] }
        ];
        /** @nocollapse */
        UiEditorComponent.ctorParameters = function () {
            return [
                { type: formsLib.FormsLibService }
            ];
        };
        UiEditorComponent.propDecorators = {
            record: [{ type: i0.Input }],
            create: [{ type: i0.Input }],
            delete: [{ type: i0.Output }],
            cancel: [{ type: i0.Output }],
            update: [{ type: i0.Output }]
        };
        return UiEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        SharedLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            UiEditorComponent,
                            UiListComponent,
                            UiConfirmComponent
                        ],
                        imports: [
                            common.CommonModule,
                            formsLib.FormsLibModule,
                            toolbar.MatToolbarModule,
                            button.MatButtonModule
                        ],
                        exports: [
                            UiEditorComponent,
                            UiListComponent,
                            UiConfirmComponent
                        ]
                    },] }
        ];
        return SharedLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.UuidService = UuidService;
    exports.UiConfirmComponent = UiConfirmComponent;
    exports.UiListComponent = UiListComponent;
    exports.UiEditorComponent = UiEditorComponent;
    exports.SharedLibModule = SharedLibModule;
    exports.ɵa = Dialog;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=shared-lib.umd.js.map