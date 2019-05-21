/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormsLibService } from 'forms-lib';
var UiEditorComponent = /** @class */ (function () {
    function UiEditorComponent(formsService) {
        this.formsService = formsService;
        this.delete = new EventEmitter();
        this.cancel = new EventEmitter();
        this.update = new EventEmitter();
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
        this.form = new FormGroup({});
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
        { type: Component, args: [{
                    selector: 'ui-editor',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"updateRecord(model)\">\n  <formly-form [form]=\"form\" [fields]=\"fields\" [options]=\"options\" [model]=\"model\"></formly-form>\n  <mat-toolbar>\n    <span>\n      <button mat-stroked-button type=\"button\" *ngIf=\"!create\" (click)=\"deleteRecord(model)\" class=\"btn btn-default\" icon=\"pi pi-check\">Delete</button>\n    </span>\n    <span class=\"ui-spacer\"></span>\n    <span>\n      <button mat-stroked-button type=\"button\" (click)=\"cancelEdit(model)\"  class=\"btn btn-default\" icon=\"pi pi-check\">Cancel</button>\n      <button mat-stroked-button type=\"submit\" class=\"btn btn-default\" icon=\"pi pi-save\">{{submitLabel}}</button>\n    </span>\n  </mat-toolbar>\n</form>\n<pre>{{form.value | json}}</pre>\n"
                }] }
    ];
    /** @nocollapse */
    UiEditorComponent.ctorParameters = function () { return [
        { type: FormsLibService }
    ]; };
    UiEditorComponent.propDecorators = {
        record: [{ type: Input }],
        create: [{ type: Input }],
        delete: [{ type: Output }],
        cancel: [{ type: Output }],
        update: [{ type: Output }]
    };
    return UiEditorComponent;
}());
export { UiEditorComponent };
if (false) {
    /** @type {?} */
    UiEditorComponent.prototype.record;
    /** @type {?} */
    UiEditorComponent.prototype.create;
    /** @type {?} */
    UiEditorComponent.prototype.delete;
    /** @type {?} */
    UiEditorComponent.prototype.cancel;
    /** @type {?} */
    UiEditorComponent.prototype.update;
    /** @type {?} */
    UiEditorComponent.prototype.form;
    /** @type {?} */
    UiEditorComponent.prototype.model;
    /** @type {?} */
    UiEditorComponent.prototype.fields;
    /** @type {?} */
    UiEditorComponent.prototype.options;
    /** @type {?} */
    UiEditorComponent.prototype.submitLabel;
    /**
     * @type {?}
     * @private
     */
    UiEditorComponent.prototype.formsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC1saWIvIiwic291cmNlcyI6WyJsaWIvdWkvdWktZWRpdG9yL3VpLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQXdDLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RjtJQWlCRSwyQkFDVSxZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVILG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQUU7UUFDekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztTQUMzQjthQUFNO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7U0FDM0I7SUFDTCxDQUFDOzs7OztJQUVPLHNDQUFVOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLHdDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTSxzQ0FBVTs7OztJQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sd0NBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwd0JBQXlDO2lCQUMxQzs7OztnQkFMeUQsZUFBZTs7O3lCQU90RSxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07O0lBZ0RULHdCQUFDO0NBQUEsQUF6REQsSUF5REM7U0FyRFksaUJBQWlCOzs7SUFDNUIsbUNBQXFCOztJQUNyQixtQ0FBeUI7O0lBQ3pCLG1DQUFvQzs7SUFDcEMsbUNBQW9DOztJQUNwQyxtQ0FBb0M7O0lBRXBDLGlDQUF1Qjs7SUFDdkIsa0NBQWtCOztJQUNsQixtQ0FBbUM7O0lBQ25DLG9DQUFrQzs7SUFDbEMsd0NBQTJCOzs7OztJQUd6Qix5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybWx5Rm9ybU9wdGlvbnMsIEZvcm1seUZpZWxkQ29uZmlnLCBGb3Jtc0xpYlNlcnZpY2UgfSBmcm9tICdmb3Jtcy1saWInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZWRpdG9yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVaUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcmVjb3JkOiBhbnk7XG4gIEBJbnB1dCgpIGNyZWF0ZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgbW9kZWw6IGFueTtcbiAgcHVibGljIGZpZWxkczogRm9ybWx5RmllbGRDb25maWdbXTtcbiAgcHVibGljIG9wdGlvbnM6IEZvcm1seUZvcm1PcHRpb25zO1xuICBwdWJsaWMgc3VibWl0TGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1zU2VydmljZTogRm9ybXNMaWJTZXJ2aWNlLFxuICAgICkge1xuICAgICAgdGhpcy5kZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICAgIHRoaXMuY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVjb3JkKSB7IGNvbnNvbGUubG9nKCdObyByZWNvcmQgc3VwcGxpZWQhJyk7IH1cbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubW9kZWwgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJlY29yZCk7XG4gICAgaWYgKHRoaXMuY3JlYXRlKSB7XG4gICAgICB0aGlzLnN1Ym1pdExhYmVsID0gJ0NyZWF0ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRMYWJlbCA9ICdVcGRhdGUnO1xuICAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuZmllbGRzID0gdGhpcy5mb3Jtc1NlcnZpY2UuZ2V0TW9kZWxGaWVsZHModGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlUmVjb3JkKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxFZGl0KG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVSZWNvcmQobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlLmVtaXQobW9kZWwpO1xuICB9XG5cbn1cbiJdfQ==