/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialog } from './dialog.model';
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
        { type: Component, args: [{
                    selector: 'ui-confirm',
                    template: "<h1 mat-dialog-title>\n  {{title}}\n</h1>\n\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onDismiss()\">No</button>\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Yes</button>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UiConfirmComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: Dialog, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return UiConfirmComponent;
}());
export { UiConfirmComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQtbGliLyIsInNvdXJjZXMiOlsibGliL3VpL3VpLWNvbmZpcm0vdWktY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDO0lBU0UsNEJBQ1MsU0FBMkMsRUFDbEIsSUFBWTtRQURyQyxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDRSxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixpU0FBMEM7O2lCQUUzQzs7OztnQkFSUSxZQUFZO2dCQUVaLE1BQU0sdUJBYVYsTUFBTSxTQUFDLGVBQWU7O0lBa0IzQix5QkFBQztDQUFBLEFBN0JELElBNkJDO1NBeEJZLGtCQUFrQjs7O0lBQzdCLG1DQUFjOztJQUNkLHFDQUFnQjs7SUFHZCx1Q0FBa0Q7O0lBQ2xELGtDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWNvbmZpcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktY29uZmlybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNvbmZpcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpQ29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VWlDb25maXJtQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ1xuICAgICkgeyAgICAvLyBVcGRhdGUgdmlldyB3aXRoIGdpdmVuIHZhbHVlc1xuICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICAvLyBDbG9zZSB0aGUgZGlhbG9nLCByZXR1cm4gdHJ1ZVxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9XG5cbiAgb25EaXNtaXNzKCk6IHZvaWQge1xuICAgIC8vIENsb3NlIHRoZSBkaWFsb2csIHJldHVybiBmYWxzZVxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxufVxuIl19