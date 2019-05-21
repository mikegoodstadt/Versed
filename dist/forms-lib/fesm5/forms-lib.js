import '@angular/material';
import { Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { __values, __extends, __spread, __assign } from 'tslib';
import { Injectable, NgModule, defineInjectable, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
export { ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_z, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_t, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, RadioControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldArrayType, FormlyFormBuilder, FieldType as FieldType$1, FieldWrapper, FormlyModule } from '@ngx-formly/core';
export { ɵh, ɵg, FormlyForm, FormlyField, FormlyAttributes, FORMLY_CONFIG, FormlyConfig, FormlyFormBuilder, FieldType, Field, FieldArrayType, FieldWrapper, FormlyModule, ɵdefineHiddenProp, ɵreverseDeepMerge } from '@ngx-formly/core';
import { FieldType, FormlyMaterialModule } from '@ngx-formly/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __assign({ type: type,
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
        return this.input(key, __assign({}, templateOptions, defaults), options);
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
        return this.input(key, __assign({}, templateOptions, defaults), options);
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
        return this.input(key, __assign({}, templateOptions, defaults), options);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var UUID = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) {
    /** @type {?} */
    var templateOptions = {
        label: 'UUID',
        placeholder: 'Enter UUID',
        required: true,
        disabled: true
    };
    return __assign({}, Field.input('uuid', __assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TITLE = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) {
    /** @type {?} */
    var templateOptions = {
        label: 'Title',
        placeholder: 'Enter Title',
        required: true,
        disabled: disabled
    };
    return __assign({}, Field.input('title', __assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DESCRIPTION = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) {
    /** @type {?} */
    var templateOptions = {
        label: 'Description',
        placeholder: 'Enter Description',
        required: true,
        disabled: disabled
    };
    return __assign({}, Field.input('description', __assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CATEGORY = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) { return (__assign({}, Field.field('chips', 'category', {
    label: 'Category',
    placeholder: 'Enter Category',
    required: true,
    disabled: disabled
}))); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STATE = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) {
    /** @type {?} */
    var templateOptions = {
        label: 'State',
        disabled: disabled
    };
    return __assign({}, Field.checkbox('state', __assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LAYOUT = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) { return (__assign({}, Field.field('select', 'layout', {
    label: 'Layout',
    placeholder: 'Select Layout',
    required: true,
    disabled: disabled
}))); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WIDGETS = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) { return (__assign({}, Field.field('checkbox', 'widgets', {
    label: 'Widgets',
    placeholder: 'Select Widgets',
    required: true,
    disabled: disabled
}))); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EMAIL = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) { return (__assign({}, Field.email('email', {
    placeholder: 'Enter your email',
    required: true,
    disabled: disabled
}))); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERCENTAGE = (/**
 * @param {?} disabled
 * @return {?}
 */
function (disabled) { return (__assign({}, Field.field('percentage', 'percentage', {
    label: 'Enter you percentage from 1 to 100 %',
    description: 'Try to enter 200%',
    disabled: disabled
}))); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var ELEMENTS = /*#__PURE__*/Object.freeze({
    UUID: UUID,
    TITLE: TITLE,
    DESCRIPTION: DESCRIPTION,
    CATEGORY: CATEGORY,
    STATE: STATE,
    LAYOUT: LAYOUT,
    WIDGETS: WIDGETS,
    EMAIL: EMAIL,
    PERCENTAGE: PERCENTAGE
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
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
    /** @nocollapse */ FormsLibService.ngInjectableDef = defineInjectable({ factory: function FormsLibService_Factory() { return new FormsLibService(); }, token: FormsLibService, providedIn: "root" });
    return FormsLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RepeatSectionComponent = /** @class */ (function (_super) {
    __extends(RepeatSectionComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputChipsComponent = /** @class */ (function (_super) {
    __extends(InputChipsComponent, _super);
    function InputChipsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDestroy$ = new Subject();
        _this.itemControl = new FormControl();
        _this.selectable = true;
        _this.removable = true;
        _this.addOnBlur = true;
        _this.separatorKeysCodes = [ENTER, COMMA];
        return _this;
    }
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.filter = this.itemControl.valueChanges.pipe(takeUntil(this.onDestroy$), startWith(null), map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item ? _this._filter(item) : _this._filter(''); })));
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        // temporary fix for https://github.com/angular/material2/issues/6728
        ((/** @type {?} */ (this.matAutocomplete)))._formField = this.formField;
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    Object.defineProperty(InputChipsComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () { return this.formControl.value.length === 0; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    InputChipsComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Add item only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            var input = event.input;
            /** @type {?} */
            var value = event.value;
            // Add item
            if ((value || '').trim()) {
                this.formControl.setValue(__spread(this.formControl.value, [
                    value.trim(),
                ]));
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.itemControl.setValue(null);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputChipsComponent.prototype.selected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formControl.setValue(__spread(this.formControl.value, [
            event.option.viewValue,
        ]));
        this.itemControl.setValue(null);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    InputChipsComponent.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var value = this.formControl.value;
        this.formControl.setValue(__spread(value.slice(0, i), value.slice(i + 1, value.length)));
        this.formControl.markAsTouched();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    InputChipsComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.to.filter) {
            return [];
        }
        if (!value) {
            return this.to.filter.slice();
        }
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.to.filter.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.toLowerCase().indexOf(filterValue) === 0; }));
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.formControl.markAsTouched();
        this.field.focus = false;
    };
    InputChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-input-chips',
                    template: "<!-- <p-chips\n  [class.ng-dirty]=\"showError\"\n  [placeholder]=\"to.placeholder\"\n  [formControl]=\"formControl\"\n  [formlyAttributes]=\"field\">\n</p-chips> -->\n<mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let item of formControl.value;let i = index\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(i)\"\n    >\n      {{ item }}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      [formControl]=\"itemControl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n      (blur)=\"onBlur()\"\n    />\n  </mat-chip-list>\n  <mat-autocomplete\n    #auto=\"matAutocomplete\"\n    (optionSelected)=\"selected($event)\"\n  >\n    <mat-option *ngFor=\"let item of (filter | async)\" [value]=\"item\">\n      {{ item }}\n    </mat-option>\n  </mat-autocomplete>"
                }] }
    ];
    InputChipsComponent.propDecorators = {
        matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
    };
    return InputChipsComponent;
}(FieldType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputPercentageComponent = /** @class */ (function (_super) {
    __extends(InputPercentageComponent, _super);
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
}(FieldType$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelWrapperComponent = /** @class */ (function (_super) {
    __extends(PanelWrapperComponent, _super);
    function PanelWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return PanelWrapperComponent;
}(FieldWrapper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorWrapperComponent = /** @class */ (function (_super) {
    __extends(ErrorWrapperComponent, _super);
    function ErrorWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-wrapper-error',
                    template: "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"formControl.errors && formControl.errors['totalAmount']\">\n  {{ formControl.errors['totalAmount'] }}\n</div>\n<ng-container #fieldComponent></ng-container>"
                }] }
    ];
    ErrorWrapperComponent.propDecorators = {
        fieldComponent: [{ type: ViewChild, args: ['fieldComponent', { read: ViewContainerRef },] }]
    };
    return ErrorWrapperComponent;
}(FieldWrapper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function minlengthValidationMessage(err, field) {
    return "Should have at least " + field.templateOptions.minLength + " characters";
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxlengthValidationMessage(err, field) {
    return "This value should be less than " + field.templateOptions.maxLength + " characters";
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function minValidationMessage(err, field) {
    return "This value should be more than " + field.templateOptions.min;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxValidationMessage(err, field) {
    return "This value should be less than " + field.templateOptions.max;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} control
 * @param {?} type
 * @return {?}
 */
function maximumMoneyValidation(control, type) {
    /** @type {?} */
    var value = control.value;
    if (value) {
        /** @type {?} */
        var unMasked = parseInt(value.replace(/\D/g, ''));
        if (unMasked > 10000) {
            return { maximumMoneyValidation: 'Should be bellow 10.000' };
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var config = {
    types: [
        { name: 'repeat', component: RepeatSectionComponent },
        { name: 'chips', component: InputChipsComponent },
        { name: 'percentage', component: InputPercentageComponent }
    ],
    wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
        { name: 'error-on-top', component: ErrorWrapperComponent }
    ],
    validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'maximumMoneyValidation', message: 'should be 100' }
    ],
    validators: [
        { name: 'maximumMoneyValidation', validation: maximumMoneyValidation }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormsLibModule = /** @class */ (function () {
    function FormsLibModule() {
    }
    FormsLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        PanelWrapperComponent,
                        ErrorWrapperComponent,
                        RepeatSectionComponent,
                        InputChipsComponent,
                        InputPercentageComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        FormlyModule.forRoot(config),
                        FormlyMaterialModule,
                        MatChipsModule,
                        MatIconModule,
                        MatAutocompleteModule
                    ],
                    exports: [
                        FormsModule,
                        ReactiveFormsModule,
                        FormlyModule,
                        FormlyMaterialModule,
                        PanelWrapperComponent,
                        ErrorWrapperComponent,
                        RepeatSectionComponent,
                        InputChipsComponent,
                        InputPercentageComponent
                    ],
                    providers: [],
                    entryComponents: []
                },] }
    ];
    return FormsLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormsLibService, RepeatSectionComponent, InputChipsComponent, InputPercentageComponent, PanelWrapperComponent, ErrorWrapperComponent, FormsLibModule, config as ɵa, maxValidationMessage as ɵe, maxlengthValidationMessage as ɵc, minValidationMessage as ɵd, minlengthValidationMessage as ɵb, maximumMoneyValidation as ɵf };

//# sourceMappingURL=forms-lib.js.map