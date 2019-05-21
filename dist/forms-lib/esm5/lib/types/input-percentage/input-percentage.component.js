/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var InputPercentageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputPercentageComponent, _super);
    function InputPercentageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} rawValue
     * @return {?}
     */
    InputPercentageComponent.prototype.limitToHundred = /**
     * @param {?} rawValue
     * @return {?}
     */
    function (rawValue) {
        /** @type {?} */
        var value = parseInt(rawValue, 10);
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
    };
    InputPercentageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-input-percentage',
                    template: "<div class=\"form-group\">\n  <label class=\"form-control-label control-label\">\n    {{ to.label }}\n  </label>\n  <!-- <input type=\"text\" class=\"form-control\" [textMask]=\"{mask: limitToHundred}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\"> -->\n</div>"
                }] }
    ];
    return InputPercentageComponent;
}(FieldType));
export { InputPercentageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvaW5wdXQtcGVyY2VudGFnZS9pbnB1dC1wZXJjZW50YWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDO0lBSThDLG9EQUFTO0lBSnZEOztJQWtCQSxDQUFDOzs7OztJQWJRLGlEQUFjOzs7O0lBQXJCLFVBQXNCLFFBQVE7O1lBQ3RCLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUVwQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDUCxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDhSQUFnRDtpQkFDakQ7O0lBZUQsK0JBQUM7Q0FBQSxBQWxCRCxDQUk4QyxTQUFTLEdBY3REO1NBZFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWlucHV0LXBlcmNlbnRhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQZXJjZW50YWdlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgcHVibGljIGxpbWl0VG9IdW5kcmVkKHJhd1ZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChyYXdWYWx1ZSwgMTApO1xuXG4gICAgaWYgKHZhbHVlIDwgMTAwKSB7XG4gICAgICBpZiAodmFsdWUgPCAxMCkge1xuICAgICAgICByZXR1cm4gWy9cXGQvLCAnICUnXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gWy9cXGQvLCAvXFxkLywgJyAlJ107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbJzEwMCAlJ107XG4gICAgfVxuICB9XG59XG4iXX0=