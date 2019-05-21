/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
export class InputPercentageComponent extends FieldType {
    /**
     * @param {?} rawValue
     * @return {?}
     */
    limitToHundred(rawValue) {
        /** @type {?} */
        const value = parseInt(rawValue, 10);
        if (value < 100) {
            if (value < 10) {
                return [/\d/, ' %'];
            }
            else {
                return [/\d/, /\d/, ' %'];
            }
        }
        else {
            return ['100 %'];
        }
    }
}
InputPercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-input-percentage',
                template: "<div class=\"form-group\">\n  <label class=\"form-control-label control-label\">\n    {{ to.label }}\n  </label>\n  <!-- <input type=\"text\" class=\"form-control\" [textMask]=\"{mask: limitToHundred}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\"> -->\n</div>"
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvaW5wdXQtcGVyY2VudGFnZS9pbnB1dC1wZXJjZW50YWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNN0MsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFNBQVM7Ozs7O0lBQzlDLGNBQWMsQ0FBQyxRQUFROztjQUN0QixLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFFcEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ1AsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDekI7U0FDRjthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyw4UkFBZ0Q7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktaW5wdXQtcGVyY2VudGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1wZXJjZW50YWdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFBlcmNlbnRhZ2VDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xuICBwdWJsaWMgbGltaXRUb0h1bmRyZWQocmF3VmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHJhd1ZhbHVlLCAxMCk7XG5cbiAgICBpZiAodmFsdWUgPCAxMDApIHtcbiAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBbL1xcZC8sICcgJSddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbL1xcZC8sIC9cXGQvLCAnICUnXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsnMTAwICUnXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==