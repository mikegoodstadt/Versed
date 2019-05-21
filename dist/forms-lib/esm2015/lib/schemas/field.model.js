/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
export class Field {
    /**
     * @param {?} type
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static field(type, key, templateOptions, options) {
        return Object.assign({ type,
            key,
            templateOptions }, options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static input(key, templateOptions, options) {
        return this.field('input', key, templateOptions, options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static email(key, templateOptions, options) {
        /** @type {?} */
        const defaults = {
            type: 'email',
            label: 'Email'
        };
        return this.input(key, Object.assign({}, templateOptions, defaults), options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static password(key, templateOptions, options) {
        /** @type {?} */
        const defaults = {
            label: 'Password',
            type: 'password',
            minLength: 3,
            required: true
        };
        return this.input(key, Object.assign({}, templateOptions, defaults), options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static checkbox(key, templateOptions, options) {
        /** @type {?} */
        const defaults = {
            type: 'checkbox',
            label: 'Checkbox',
            checked: false
        };
        return this.input(key, Object.assign({}, templateOptions, defaults), options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static select(key, templateOptions, options) {
        return this.field('select', key, templateOptions, options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static textarea(key, templateOptions, options) {
        return this.field('textarea', key, templateOptions, options);
    }
    /**
     * @param {?} key
     * @param {?=} templateOptions
     * @param {?=} options
     * @return {?}
     */
    static radio(key, templateOptions, options) {
        return this.field('radio', key, templateOptions, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy1saWIvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hcy9maWVsZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyxLQUFLOzs7Ozs7OztJQUVULE1BQU0sQ0FBQyxLQUFLLENBQ2pCLElBQVksRUFDWixHQUFXLEVBQ1gsZUFBdUMsRUFDdkMsT0FBYTtRQUViLHVCQUNFLElBQUk7WUFDSixHQUFHO1lBQ0gsZUFBZSxJQUNaLE9BQU8sRUFDVjtJQUNKLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQVcsRUFBRSxlQUF1QyxFQUFFLE9BQWE7UUFDckYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQVcsRUFBRSxlQUF1QyxFQUFFLE9BQWE7O2NBQy9FLFFBQVEsR0FBRztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLG9CQUFPLGVBQWUsRUFBSyxRQUFRLEdBQUksT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBVyxFQUFFLGVBQXVDLEVBQUUsT0FBYTs7Y0FDbEYsUUFBUSxHQUFHO1lBQ2YsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsb0JBQU8sZUFBZSxFQUFLLFFBQVEsR0FBSSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhOztjQUNsRixRQUFRLEdBQUc7WUFDZixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsS0FBSztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsb0JBQU8sZUFBZSxFQUFLLFFBQVEsR0FBSSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhO1FBQ3RGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhO1FBQ3hGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFXLEVBQUUsZUFBdUMsRUFBRSxPQUFhO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgRmllbGQge1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGQoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGtleTogc3RyaW5nLFxuICAgIHRlbXBsYXRlT3B0aW9ucz86IEZvcm1seVRlbXBsYXRlT3B0aW9ucyxcbiAgICBvcHRpb25zPzogYW55XG4gICk6IEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIGtleSxcbiAgICAgIHRlbXBsYXRlT3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbnB1dChrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdpbnB1dCcsIGtleSwgdGVtcGxhdGVPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZW1haWwoa2V5OiBzdHJpbmcsIHRlbXBsYXRlT3B0aW9ucz86IEZvcm1seVRlbXBsYXRlT3B0aW9ucywgb3B0aW9ucz86IGFueSk6IEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICBsYWJlbDogJ0VtYWlsJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBhc3N3b3JkKGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNoZWNrYm94KGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgbGFiZWw6ICdDaGVja2JveCcsXG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQoa2V5LCB7IC4uLnRlbXBsYXRlT3B0aW9ucywgLi4uZGVmYXVsdHMgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlbGVjdChrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdzZWxlY3QnLCBrZXksIHRlbXBsYXRlT3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRleHRhcmVhKGtleTogc3RyaW5nLCB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpOiBGb3JtbHlGaWVsZENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGQoJ3RleHRhcmVhJywga2V5LCB0ZW1wbGF0ZU9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByYWRpbyhrZXk6IHN0cmluZywgdGVtcGxhdGVPcHRpb25zPzogRm9ybWx5VGVtcGxhdGVPcHRpb25zLCBvcHRpb25zPzogYW55KTogRm9ybWx5RmllbGRDb25maWcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKCdyYWRpbycsIGtleSwgdGVtcGxhdGVPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG59XG4iXX0=