/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as ELEMENTS from './schemas/form-elements';
import * as i0 from "@angular/core";
export class FormsLibService {
    constructor() { }
    /**
     * @return {?}
     */
    getDefaultForm() {
        return null; // DEFAULT_FORM().template;
    }
    /**
     * @param {?} id
     * @param {?=} disabled
     * @return {?}
     */
    getFormById(id, disabled = false) {
        return null; // FORMS_VALUES(disabled)[id];
    }
    /**
     * @private
     * @param {?} clone
     * @return {?}
     */
    generateCleanConfiguration(clone) {
        return JSON.parse(JSON.stringify(clone));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    getModelFields(model) {
        // for each model prop test type and generate appropriate formfield
        /** @type {?} */
        const fields = Object.keys(model);
        /** @type {?} */
        const fieldConfig = [];
        for (const field of fields) {
            /** @type {?} */
            const fieldFn = field.toUpperCase();
            /** @type {?} */
            let fieldOps = {};
            if (typeof ELEMENTS[fieldFn] === 'function') {
                // console.log('FormsLib ELEMENTS contains: ', fieldFn);
                fieldOps = ELEMENTS[fieldFn]();
                fieldConfig.push(fieldOps);
            }
            else {
                console.log('FormsLib ELEMENTS does not contain field: ', field);
            }
        }
        // console.log(fieldConfig);
        return fieldConfig;
    }
}
FormsLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormsLibService.ctorParameters = () => [];
/** @nocollapse */ FormsLibService.ngInjectableDef = i0.defineInjectable({ factory: function FormsLibService_Factory() { return new FormsLibService(); }, token: FormsLibService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvZm9ybXMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7Ozs7SUFDVixjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBQzFDLENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxFQUFVLEVBQUUsUUFBUSxHQUFHLEtBQUs7UUFDN0MsT0FBTyxJQUFJLENBQUMsQ0FBQyw4QkFBOEI7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sMEJBQTBCLENBQUMsS0FBZTtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLEtBQVU7OztjQUV4QixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O2NBQzNCLFdBQVcsR0FBRyxFQUFFO1FBQ3RCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFOztrQkFDcEIsT0FBTyxHQUFXLEtBQUssQ0FBQyxXQUFXLEVBQUU7O2dCQUN2QyxRQUFRLEdBQUcsRUFBRTtZQUNqQixJQUFJLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDM0Msd0RBQXdEO2dCQUN4RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsNEJBQTRCO1FBQzVCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQW5DRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0ICogYXMgRUxFTUVOVFMgZnJvbSAnLi9zY2hlbWFzL2Zvcm0tZWxlbWVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHB1YmxpYyBnZXREZWZhdWx0Rm9ybSgpOiBGb3JtbHlGaWVsZENvbmZpZ1tdIHtcbiAgICByZXR1cm4gbnVsbDsgLy8gREVGQVVMVF9GT1JNKCkudGVtcGxhdGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybUJ5SWQoaWQ6IHN0cmluZywgZGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsOyAvLyBGT1JNU19WQUxVRVMoZGlzYWJsZWQpW2lkXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVDbGVhbkNvbmZpZ3VyYXRpb24oY2xvbmU6IG9iamVjdFtdKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2xvbmUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlbEZpZWxkcyhtb2RlbDogYW55KTogRm9ybWx5RmllbGRDb25maWdbXSB7XG4gICAgLy8gZm9yIGVhY2ggbW9kZWwgcHJvcCB0ZXN0IHR5cGUgYW5kIGdlbmVyYXRlIGFwcHJvcHJpYXRlIGZvcm1maWVsZFxuICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKG1vZGVsKTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICBjb25zdCBmaWVsZEZuOiBzdHJpbmcgPSBmaWVsZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGV0IGZpZWxkT3BzID0ge307XG4gICAgICBpZiAodHlwZW9mIEVMRU1FTlRTW2ZpZWxkRm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGb3Jtc0xpYiBFTEVNRU5UUyBjb250YWluczogJywgZmllbGRGbik7XG4gICAgICAgIGZpZWxkT3BzID0gRUxFTUVOVFNbZmllbGRGbl0oKTtcbiAgICAgICAgZmllbGRDb25maWcucHVzaChmaWVsZE9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRm9ybXNMaWIgRUxFTUVOVFMgZG9lcyBub3QgY29udGFpbiBmaWVsZDogJywgZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZENvbmZpZyk7XG4gICAgcmV0dXJuIGZpZWxkQ29uZmlnO1xuICB9XG59XG4iXX0=