import { v4, v5 } from 'uuid';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs';
import { Injectable, NgModule, Component, Inject, Input, Output, EventEmitter, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsLibService, FormsLibModule } from 'forms-lib';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Adapted from https://stackoverflow.com/a/55365334/1667410
 */
class UuidService {
    constructor() {
        this.idCache = [];
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    generate(url) {
        /** @type {?} */
        let isUnique = false;
        /** @type {?} */
        let tempId = '';
        if (url) {
            tempId = v5(url, v5.URL);
        }
        else {
            tempId = v4();
        }
        while (!isUnique) {
            if (!this.idExists(tempId)) {
                isUnique = true;
            }
        }
        // console.log(this.idCache);
        return tempId;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    cache(id) {
        this.idCache.push(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    release(id) {
        /** @type {?} */
        const index = this.idCache.indexOf(id);
        this.idCache.splice(index, 1);
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    idExists(id) {
        return this.idCache.includes(id);
    }
}
UuidService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UuidService.ctorParameters = () => [];
/** @nocollapse */ UuidService.ngInjectableDef = defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Dialog {
    /**
     * @param {?} title
     * @param {?} message
     */
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiConfirmComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.message = data.message;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    /**
     * @return {?}
     */
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
}
UiConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-confirm',
                template: "<h1 mat-dialog-title>\n  {{title}}\n</h1>\n\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onDismiss()\">No</button>\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Yes</button>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
UiConfirmComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: Dialog, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { UiConfirmComponent } from '../ui-confirm/ui-confirm.component';
class UiListComponent {
    constructor() {
        this.hideCols = ['uuid'];
        this.display = [];
        this.datasetChange = new EventEmitter();
        this.currentChange = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setColumns();
    }
    /*
       * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
       */
    /**
     * @return {?}
     */
    sortDisabled() {
        return 0;
    }
    /**
     * @return {?}
     */
    setColumns() {
        /** @type {?} */
        let now;
        this.current.subscribe((/**
         * @param {?} curr
         * @return {?}
         */
        curr => now = curr));
        this.headers = Object.keys(now);
        this.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        header => {
            /** @type {?} */
            let displayType = 'table-cell';
            /** @type {?} */
            const hidden = this.hideCols.find((/**
             * @param {?} col
             * @return {?}
             */
            col => col === header));
            if (hidden) {
                displayType = 'none';
            }
            this.display.push(displayType);
        }));
    }
    /**
     * @param {?} record
     * @return {?}
     */
    setCurrent(record) {
        this.currentChange.emit(record);
    }
    /**
     * @param {?} record
     * @return {?}
     */
    editRecord(record) {
        this.edit.emit(record);
    }
    /**
     * @param {?} record
     * @return {?}
     */
    deleteRecord(record) {
        // this.confirmationService.confirm({
        //   message: 'Are you sure that you want to delete this record',
        //   header: 'Delete record',
        //   icon: 'pi pi-exclamation-triangle',
        //   accept: () => {
        this.delete.emit(record);
        //   }
        // });
    }
}
UiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-list',
                template: "<ng-container *ngIf=\"(dataset | async) as data; else loading\">\n<!-- <p-table [value]=\"data\" autoLayout=\"true\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Current</th>\n      <th *ngFor=\"let header of headers; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ header | titlecase}}</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-record>\n    <tr>\n      <td><button title=\"uuid: {{record.uuid}}\" (click)=\"setCurrent(record)\" pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" [ngClass]=\"{'ui-state-active': record.uuid === (current | async).uuid }\"></button></td>\n      <td *ngFor=\"let field of record | keyvalue:sortDisabled; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ field.value }}</td>\n      <td><button (click)=\"editRecord(record)\" pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"left\"></button></td>\n      <td><button (click)=\"deleteRecord(record)\" pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"left\"></button></td>\n    </tr>\n  </ng-template>\n</p-table> -->\n</ng-container>\n<ng-template #loading>Workspace List loading...</ng-template>\n<ui-confirm></ui-confirm>  \n",
                styles: [".ui-icon{padding:0 14px}.ui-spacer{flex:1 1 auto}:host ::ng-deep th{text-align:left}"]
            }] }
];
/** @nocollapse */
UiListComponent.ctorParameters = () => [];
UiListComponent.propDecorators = {
    dataset: [{ type: Input }],
    datasetChange: [{ type: Output }],
    current: [{ type: Input }],
    currentChange: [{ type: Output }],
    edit: [{ type: Output }],
    delete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiEditorComponent {
    /**
     * @param {?} formsService
     */
    constructor(formsService) {
        this.formsService = formsService;
        this.delete = new EventEmitter();
        this.cancel = new EventEmitter();
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.record) {
            console.log('No record supplied!');
        }
        this.createForm();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.model = Object.assign({}, this.record);
        if (this.create) {
            this.submitLabel = 'Create';
        }
        else {
            this.submitLabel = 'Update';
        }
    }
    /**
     * @private
     * @return {?}
     */
    createForm() {
        this.form = new FormGroup({});
        this.fields = this.formsService.getModelFields(this.model);
        this.options = {};
    }
    /**
     * @param {?} model
     * @return {?}
     */
    deleteRecord(model) {
        this.delete.emit(model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    cancelEdit(model) {
        this.cancel.emit(model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    updateRecord(model) {
        this.update.emit(model);
    }
}
UiEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-editor',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"updateRecord(model)\">\n  <formly-form [form]=\"form\" [fields]=\"fields\" [options]=\"options\" [model]=\"model\"></formly-form>\n  <mat-toolbar>\n    <span>\n      <button mat-stroked-button type=\"button\" *ngIf=\"!create\" (click)=\"deleteRecord(model)\" class=\"btn btn-default\" icon=\"pi pi-check\">Delete</button>\n    </span>\n    <span class=\"ui-spacer\"></span>\n    <span>\n      <button mat-stroked-button type=\"button\" (click)=\"cancelEdit(model)\"  class=\"btn btn-default\" icon=\"pi pi-check\">Cancel</button>\n      <button mat-stroked-button type=\"submit\" class=\"btn btn-default\" icon=\"pi pi-save\">{{submitLabel}}</button>\n    </span>\n  </mat-toolbar>\n</form>\n<pre>{{form.value | json}}</pre>\n"
            }] }
];
/** @nocollapse */
UiEditorComponent.ctorParameters = () => [
    { type: FormsLibService }
];
UiEditorComponent.propDecorators = {
    record: [{ type: Input }],
    create: [{ type: Input }],
    delete: [{ type: Output }],
    cancel: [{ type: Output }],
    update: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedLibModule {
}
SharedLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UiEditorComponent,
                    UiListComponent,
                    UiConfirmComponent
                ],
                imports: [
                    CommonModule,
                    FormsLibModule,
                    MatToolbarModule,
                    MatButtonModule
                ],
                exports: [
                    UiEditorComponent,
                    UiListComponent,
                    UiConfirmComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UuidService, UiConfirmComponent, UiListComponent, UiEditorComponent, SharedLibModule, Dialog as ɵa };

//# sourceMappingURL=shared-lib.js.map