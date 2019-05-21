/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as ELEMENTS from './schemas/form-elements';
import * as i0 from "@angular/core";
var FormsLibService = /** @class */ (function () {
    function FormsLibService() {
    }
    /**
     * @return {?}
     */
    FormsLibService.prototype.getDefaultForm = /**
     * @return {?}
     */
    function () {
        return null; // DEFAULT_FORM().template;
    };
    /**
     * @param {?} id
     * @param {?=} disabled
     * @return {?}
     */
    FormsLibService.prototype.getFormById = /**
     * @param {?} id
     * @param {?=} disabled
     * @return {?}
     */
    function (id, disabled) {
        if (disabled === void 0) { disabled = false; }
        return null; // FORMS_VALUES(disabled)[id];
    };
    /**
     * @private
     * @param {?} clone
     * @return {?}
     */
    FormsLibService.prototype.generateCleanConfiguration = /**
     * @private
     * @param {?} clone
     * @return {?}
     */
    function (clone) {
        return JSON.parse(JSON.stringify(clone));
    };
    /**
     * @param {?} model
     * @return {?}
     */
    FormsLibService.prototype.getModelFields = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var e_1, _a;
        // for each model prop test type and generate appropriate formfield
        /** @type {?} */
        var fields = Object.keys(model);
        /** @type {?} */
        var fieldConfig = [];
        try {
            for (var fields_1 = tslib_1.__values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                /** @type {?} */
                var fieldFn = field.toUpperCase();
                /** @type {?} */
                var fieldOps = {};
                if (typeof ELEMENTS[fieldFn] === 'function') {
                    // console.log('FormsLib ELEMENTS contains: ', fieldFn);
                    fieldOps = ELEMENTS[fieldFn]();
                    fieldConfig.push(fieldOps);
                }
                else {
                    console.log('FormsLib ELEMENTS does not contain field: ', field);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // console.log(fieldConfig);
        return fieldConfig;
    };
    FormsLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormsLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ FormsLibService.ngInjectableDef = i0.defineInjectable({ factory: function FormsLibService_Factory() { return new FormsLibService(); }, token: FormsLibService, providedIn: "root" });
    return FormsLibService;
}());
export { FormsLibService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvZm9ybXMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sS0FBSyxRQUFRLE1BQU0seUJBQXlCLENBQUM7O0FBRXBEO0lBS0U7SUFBZ0IsQ0FBQzs7OztJQUNWLHdDQUFjOzs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUMxQyxDQUFDOzs7Ozs7SUFFTSxxQ0FBVzs7Ozs7SUFBbEIsVUFBbUIsRUFBVSxFQUFFLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLENBQUMsOEJBQThCO0lBQzdDLENBQUM7Ozs7OztJQUVPLG9EQUEwQjs7Ozs7SUFBbEMsVUFBbUMsS0FBZTtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0sd0NBQWM7Ozs7SUFBckIsVUFBc0IsS0FBVTs7OztZQUV4QixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQzNCLFdBQVcsR0FBRyxFQUFFOztZQUN0QixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUF2QixJQUFNLEtBQUssbUJBQUE7O29CQUNSLE9BQU8sR0FBVyxLQUFLLENBQUMsV0FBVyxFQUFFOztvQkFDdkMsUUFBUSxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUMzQyx3REFBd0Q7b0JBQ3hELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDL0IsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDNUI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDbEU7YUFDRjs7Ozs7Ozs7O1FBQ0QsNEJBQTRCO1FBQzVCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQW5DRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFORDtDQXdDQyxBQXBDRCxJQW9DQztTQWpDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCAqIGFzIEVMRU1FTlRTIGZyb20gJy4vc2NoZW1hcy9mb3JtLWVsZW1lbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybXNMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBwdWJsaWMgZ2V0RGVmYXVsdEZvcm0oKTogRm9ybWx5RmllbGRDb25maWdbXSB7XG4gICAgcmV0dXJuIG51bGw7IC8vIERFRkFVTFRfRk9STSgpLnRlbXBsYXRlO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1CeUlkKGlkOiBzdHJpbmcsIGRpc2FibGVkID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbnVsbDsgLy8gRk9STVNfVkFMVUVTKGRpc2FibGVkKVtpZF07XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQ2xlYW5Db25maWd1cmF0aW9uKGNsb25lOiBvYmplY3RbXSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNsb25lKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZWxGaWVsZHMobW9kZWw6IGFueSk6IEZvcm1seUZpZWxkQ29uZmlnW10ge1xuICAgIC8vIGZvciBlYWNoIG1vZGVsIHByb3AgdGVzdCB0eXBlIGFuZCBnZW5lcmF0ZSBhcHByb3ByaWF0ZSBmb3JtZmllbGRcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhtb2RlbCk7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgY29uc3QgZmllbGRGbjogc3RyaW5nID0gZmllbGQudG9VcHBlckNhc2UoKTtcbiAgICAgIGxldCBmaWVsZE9wcyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBFTEVNRU5UU1tmaWVsZEZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRm9ybXNMaWIgRUxFTUVOVFMgY29udGFpbnM6ICcsIGZpZWxkRm4pO1xuICAgICAgICBmaWVsZE9wcyA9IEVMRU1FTlRTW2ZpZWxkRm5dKCk7XG4gICAgICAgIGZpZWxkQ29uZmlnLnB1c2goZmllbGRPcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm1zTGliIEVMRU1FTlRTIGRvZXMgbm90IGNvbnRhaW4gZmllbGQ6ICcsIGZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZmllbGRDb25maWcpO1xuICAgIHJldHVybiBmaWVsZENvbmZpZztcbiAgfVxufVxuIl19