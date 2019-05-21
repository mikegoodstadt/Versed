/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
var ErrorWrapperComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorWrapperComponent, _super);
    function ErrorWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-wrapper-error',
                    template: "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"formControl.errors && formControl.errors['totalAmount']\">\n  {{ formControl.errors['totalAmount'] }}\n</div>\n<ng-container #fieldComponent></ng-container>"
                }] }
    ];
    ErrorWrapperComponent.propDecorators = {
        fieldComponent: [{ type: ViewChild, args: ['fieldComponent', { read: ViewContainerRef },] }]
    };
    return ErrorWrapperComponent;
}(FieldWrapper));
export { ErrorWrapperComponent };
if (false) {
    /** @type {?} */
    ErrorWrapperComponent.prototype.fieldComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvd3JhcHBlcnMvZXJyb3Itd3JhcHBlci9lcnJvci13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQUkyQyxpREFBWTtJQUp2RDs7SUFNQSxDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsaU9BQTZDO2lCQUM5Qzs7O2lDQUVFLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQzs7SUFDdkQsNEJBQUM7Q0FBQSxBQU5ELENBSTJDLFlBQVksR0FFdEQ7U0FGWSxxQkFBcUI7OztJQUNoQywrQ0FBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS13cmFwcGVyLWVycm9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIEZpZWxkV3JhcHBlciB7XG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBmaWVsZENvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZjtcbn1cbiJdfQ==