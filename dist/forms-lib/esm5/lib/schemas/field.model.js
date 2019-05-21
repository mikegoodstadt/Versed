/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// @dynamic
var 
// @dynamic
Field = /** @class */ (function () {
    function Field() {
    }
    /**
     * @param {?} type
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.field = /**
     * @param {?} type
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (type, key, templateOptions, options) {
        return tslib_1.__assign({ type: type,
            key: key,
            templateOptions: templateOptions }, options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.input = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        return this.field('input', key, templateOptions, options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.email = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        /** @type {?} */
        var defaults = {
            type: 'email',
            label: 'Email'
        };
        return this.input(key, tslib_1.__assign({}, templateOptions, defaults), options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.password = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        /** @type {?} */
        var defaults = {
            label: 'Password',
            type: 'password',
            minLength: 3,
            required: true
        };
        return this.input(key, tslib_1.__assign({}, templateOptions, defaults), options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.checkbox = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        /** @type {?} */
        var defaults = {
            type: 'checkbox',
            label: 'Checkbox',
            checked: false
        };
        return this.input(key, tslib_1.__assign({}, templateOptions, defaults), options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.select = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        return this.field('select', key, templateOptions, options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.textarea = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        return this.field('textarea', key, templateOptions, options);
    };
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    Field.radio = /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    function (key, templateOptions, options) {
        return this.field('radio', key, templateOptions, options);
    };
    return Field;
}());
// @dynamic
export { Field };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hcy9maWVsZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7O0lBQUE7SUEyREEsQ0FBQzs7Ozs7Ozs7SUF6RGUsV0FBSzs7Ozs7OztJQUFuQixVQUNFLElBQVksRUFDWixHQUFXLEVBQ1gsZUFBdUMsRUFDdkMsT0FBYTtRQUViLDBCQUNFLElBQUksTUFBQTtZQUNKLEdBQUcsS0FBQTtZQUNILGVBQWUsaUJBQUEsSUFDWixPQUFPLEVBQ1Y7SUFDSixDQUFDOzs7Ozs7O0lBRWEsV0FBSzs7Ozs7O0lBQW5CLFVBQW9CLEdBQVcsRUFBRSxlQUF1QyxFQUFFLE9BQWE7UUFDckYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFYSxXQUFLOzs7Ozs7SUFBbkIsVUFBb0IsR0FBVyxFQUFFLGVBQXVDLEVBQUUsT0FBYTs7WUFDL0UsUUFBUSxHQUFHO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsdUJBQU8sZUFBZSxFQUFLLFFBQVEsR0FBSSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRWEsY0FBUTs7Ozs7O0lBQXRCLFVBQXVCLEdBQVcsRUFBRSxlQUF1QyxFQUFFLE9BQWE7O1lBQ2xGLFFBQVEsR0FBRztZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLHVCQUFPLGVBQWUsRUFBSyxRQUFRLEdBQUksT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQUVhLGNBQVE7Ozs7OztJQUF0QixVQUF1QixHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhOztZQUNsRixRQUFRLEdBQUc7WUFDZixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsS0FBSztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsdUJBQU8sZUFBZSxFQUFLLFFBQVEsR0FBSSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRWEsWUFBTTs7Ozs7O0lBQXBCLFVBQXFCLEdBQVcsRUFBRSxlQUF1QyxFQUFFLE9BQWE7UUFDdEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFYSxjQUFROzs7Ozs7SUFBdEIsVUFBdUIsR0FBVyxFQUFFLGVBQXVDLEVBQUUsT0FBYTtRQUN4RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7OztJQUVhLFdBQUs7Ozs7OztJQUFuQixVQUFvQixHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUgsWUFBQztBQUFELENBQUMsQUEzREQsSUEyREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgRmllbGQge1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGQoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGtleTogc3RyaW5nLFxuICAgIHRlbXBsYXRlT3B0aW9ucz86IEZvcm1seVRlbXBsYXRlT3B0aW9ucyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIGtleSxcbiAgICAgIHRlbXBsYXRlT3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbnB1dChrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdpbnB1dCcsIGtleSwgdGVtcGxhdGVPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZW1haWwoa2V5OiBzdHJpbmcsIHRlbXBsYXRlT3B0aW9ucz86IEZvcm1seVRlbXBsYXRlT3B0aW9ucywgb3B0aW9ucz86IGFueSk6IEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICBsYWJlbDogJ0VtYWlsJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBhc3N3b3JkKGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNoZWNrYm94KGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgbGFiZWw6ICdDaGVja2JveCcsXG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlbGVjdChrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdzZWxlY3QnLCBrZXksIHRlbXBsYXRlT3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRleHRhcmVhKGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQoJ3RleHRhcmVhJywga2V5LCB0ZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByYWRpbyhrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdyYWRpbycsIGtleSwgdGVtcGxhdGVPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG59XG4iXX0=