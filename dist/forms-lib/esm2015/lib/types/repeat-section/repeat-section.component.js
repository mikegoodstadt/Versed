/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
export class RepeatSectionComponent extends FieldArrayType {
    /**
     * @param {?} builder
     */
    constructor(builder) {
        super(builder);
    }
}
RepeatSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-repeat-section',
                template: "<div *ngFor=\"let field of field.fieldGroup; let i = index;\">\n  <formly-group\n    class=\"formly-repeat-section__group\"\n    [model]=\"model[i]\"\n    [field]=\"field\"\n    [options]=\"options\"\n    [form]=\"formControl\">\n    <i class=\"fa fa-trash formly-repeat-section__icon\" \n       (click)=\"remove(i)\">\n    </i>\n  </formly-group>\n</div>\n<div class=\"formly-repeat-section__action\" \n     (click)=\"add()\">\n  {{field.fieldArray.templateOptions.btnText}}\n</div>",
                styles: [".formly-repeat-section__action{color:#0275d8;cursor:pointer;display:inline-block;margin:0}.formly-repeat-section__action:hover{font-weight:700}.formly-repeat-section__icon{margin-left:auto;padding-top:8px;margin-right:10px;font-size:22px}"]
            }] }
];
/** @nocollapse */
RepeatSectionComponent.ctorParameters = () => [
    { type: FormlyFormBuilder }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMtbGliLyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3JlcGVhdC1zZWN0aW9uL3JlcGVhdC1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPckUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7Ozs7SUFDeEQsWUFBWSxPQUEwQjtRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLCtlQUE4Qzs7YUFFL0M7Ozs7WUFOd0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZEFycmF5VHlwZSwgRm9ybWx5Rm9ybUJ1aWxkZXIgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LXJlcGVhdC1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcGVhdC1zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVwZWF0LXNlY3Rpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBlYXRTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgRmllbGRBcnJheVR5cGUge1xuICBjb25zdHJ1Y3RvcihidWlsZGVyOiBGb3JtbHlGb3JtQnVpbGRlcikge1xuICAgIHN1cGVyKGJ1aWxkZXIpO1xuICB9XG59XG4iXX0=