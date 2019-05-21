/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} control
 * @param {?} type
 * @return {?}
 */
export function maximumMoneyValidation(control, type) {
    /** @type {?} */
    const value = control.value;
    if (value) {
        /** @type {?} */
        const unMasked = parseInt(value.replace(/\D/g, ''));
        if (unMasked > 10000) {
            return { maximumMoneyValidation: 'Should be bellow 10.000' };
        }
    }
    return null;
}
/**
 * @param {?} control
 * @param {?} type
 * @return {?}
 */
export function UuidValidation(control, type) {
    /** @type {?} */
    const value = control.value;
    if (value) {
        /** @type {?} */
        const uuidValid = true;
        if (!uuidValid) {
            return { UuidValidation: 'UUID not valid' };
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxJQUFJOztVQUM1QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7SUFDM0IsSUFBSSxLQUFLLEVBQUU7O2NBQ0gsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUU7WUFDcEIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLENBQUM7U0FDOUQ7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSTs7VUFDcEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO0lBQzNCLElBQUksS0FBSyxFQUFFOztjQUNILFNBQVMsR0FBRyxJQUFJO1FBRXRCLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLENBQUM7U0FDN0M7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtTW9uZXlWYWxpZGF0aW9uKGNvbnRyb2wsIHR5cGUpIHtcbiAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuICBpZiAodmFsdWUpIHtcbiAgICBjb25zdCB1bk1hc2tlZCA9IHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICAgIGlmICh1bk1hc2tlZCA+IDEwMDAwKSB7XG4gICAgICByZXR1cm4geyBtYXhpbXVtTW9uZXlWYWxpZGF0aW9uOiAnU2hvdWxkIGJlIGJlbGxvdyAxMC4wMDAnIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXVpZFZhbGlkYXRpb24oY29udHJvbCwgdHlwZSkge1xuICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG4gIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IHV1aWRWYWxpZCA9IHRydWU7IC8vIFV1aWRTZXJ2aWNlLnRleHRVdWlkKHZhbHVlKTtcblxuICAgIGlmICghdXVpZFZhbGlkKSB7XG4gICAgICByZXR1cm4geyBVdWlkVmFsaWRhdGlvbjogJ1VVSUQgbm90IHZhbGlkJyB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==