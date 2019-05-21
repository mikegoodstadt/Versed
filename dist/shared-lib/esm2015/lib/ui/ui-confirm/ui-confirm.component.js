/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialog } from './dialog.model';
export class UiConfirmComponent {
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
if (false) {
    /** @type {?} */
    UiConfirmComponent.prototype.title;
    /** @type {?} */
    UiConfirmComponent.prototype.message;
    /** @type {?} */
    UiConfirmComponent.prototype.dialogRef;
    /** @type {?} */
    UiConfirmComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQtbGliLyIsInNvdXJjZXMiOlsibGliL3VpL3VpLWNvbmZpcm0vdWktY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3hDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBSTdCLFlBQ1MsU0FBMkMsRUFDbEIsSUFBWTtRQURyQyxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixpU0FBMEM7O2FBRTNDOzs7O1lBUlEsWUFBWTtZQUVaLE1BQU0sdUJBYVYsTUFBTSxTQUFDLGVBQWU7Ozs7SUFMekIsbUNBQWM7O0lBQ2QscUNBQWdCOztJQUdkLHVDQUFrRDs7SUFDbEQsa0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktY29uZmlybScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY29uZmlybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlDb25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxVaUNvbmZpcm1Db21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nXG4gICAgKSB7ICAgIC8vIFVwZGF0ZSB2aWV3IHdpdGggZ2l2ZW4gdmFsdWVzXG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Db25maXJtKCk6IHZvaWQge1xuICAgIC8vIENsb3NlIHRoZSBkaWFsb2csIHJldHVybiB0cnVlXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBvbkRpc21pc3MoKTogdm9pZCB7XG4gICAgLy8gQ2xvc2UgdGhlIGRpYWxvZywgcmV0dXJuIGZhbHNlXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xuICB9XG59XG4iXX0=