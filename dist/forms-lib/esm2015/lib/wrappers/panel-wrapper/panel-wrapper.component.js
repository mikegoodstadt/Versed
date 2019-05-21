/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
export class PanelWrapperComponent extends FieldWrapper {
}
PanelWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-wrapper-panel',
                template: "<div class=\"card mb-5\">\n  <div class=\"card-header\">{{ to.label }}</div>\n  <div class=\"card-body\">\n    <ng-container #fieldComponent></ng-container>\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\">\n      Submit\n    </button>\n  </div>\n  <div class=\"card-body\">\n    <h4>Results</h4>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">{{ model | json }}</li>\n  </ul>\n</div>"
            }] }
];
PanelWrapperComponent.propDecorators = {
    fieldComponent: [{ type: ViewChild, args: ['fieldComponent', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    PanelWrapperComponent.prototype.fieldComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvd3JhcHBlcnMvcGFuZWwtd3JhcHBlci9wYW5lbC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZOzs7WUFKdEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHlkQUE2QzthQUM5Qzs7OzZCQUVFLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQzs7OztJQUFyRCwrQ0FBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS13cmFwcGVyLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIEZpZWxkV3JhcHBlciB7XG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBmaWVsZENvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZjtcbn1cbiJdfQ==