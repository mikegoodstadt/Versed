/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
var RepeatSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RepeatSectionComponent, _super);
    function RepeatSectionComponent(builder) {
        return _super.call(this, builder) || this;
    }
    RepeatSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-repeat-section',
                    template: "<div *ngFor=\"let field of field.fieldGroup; let i = index;\">\n  <formly-group\n    class=\"formly-repeat-section__group\"\n    [model]=\"model[i]\"\n    [field]=\"field\"\n    [options]=\"options\"\n    [form]=\"formControl\">\n    <i class=\"fa fa-trash formly-repeat-section__icon\" \n       (click)=\"remove(i)\">\n    </i>\n  </formly-group>\n</div>\n<div class=\"formly-repeat-section__action\" \n     (click)=\"add()\">\n  {{field.fieldArray.templateOptions.btnText}}\n</div>",
                    styles: [".formly-repeat-section__action{color:#0275d8;cursor:pointer;display:inline-block;margin:0}.formly-repeat-section__action:hover{font-weight:700}.formly-repeat-section__icon{margin-left:auto;padding-top:8px;margin-right:10px;font-size:22px}"]
                }] }
    ];
    /** @nocollapse */
    RepeatSectionComponent.ctorParameters = function () { return [
        { type: FormlyFormBuilder }
    ]; };
    return RepeatSectionComponent;
}(FieldArrayType));
export { RepeatSectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMtbGliLyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3JlcGVhdC1zZWN0aW9uL3JlcGVhdC1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXJFO0lBSzRDLGtEQUFjO0lBQ3hELGdDQUFZLE9BQTBCO2VBQ3BDLGtCQUFNLE9BQU8sQ0FBQztJQUNoQixDQUFDOztnQkFSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsK2VBQThDOztpQkFFL0M7Ozs7Z0JBTndCLGlCQUFpQjs7SUFXMUMsNkJBQUM7Q0FBQSxBQVRELENBSzRDLGNBQWMsR0FJekQ7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkQXJyYXlUeXBlLCBGb3JtbHlGb3JtQnVpbGRlciB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktcmVwZWF0LXNlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVwZWF0LXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBlYXQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcGVhdFNlY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBGaWVsZEFycmF5VHlwZSB7XG4gIGNvbnN0cnVjdG9yKGJ1aWxkZXI6IEZvcm1seUZvcm1CdWlsZGVyKSB7XG4gICAgc3VwZXIoYnVpbGRlcik7XG4gIH1cbn1cbiJdfQ==