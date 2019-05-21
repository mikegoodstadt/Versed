import '@angular/material';
import { Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Injectable, NgModule, Component, ViewChild, ViewContainerRef, defineInjectable } from '@angular/core';
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
class Field {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UUID = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => {
    /** @type {?} */
    const templateOptions = {
        label: 'UUID',
        placeholder: 'Enter UUID',
        required: true,
        disabled: true
    };
    return Object.assign({}, Field.input('uuid', Object.assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TITLE = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => {
    /** @type {?} */
    const templateOptions = {
        label: 'Title',
        placeholder: 'Enter Title',
        required: true,
        disabled: disabled
    };
    return Object.assign({}, Field.input('title', Object.assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DESCRIPTION = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => {
    /** @type {?} */
    const templateOptions = {
        label: 'Description',
        placeholder: 'Enter Description',
        required: true,
        disabled: disabled
    };
    return Object.assign({}, Field.input('description', Object.assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CATEGORY = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => (Object.assign({}, Field.field('chips', 'category', {
    label: 'Category',
    placeholder: 'Enter Category',
    required: true,
    disabled: disabled
}))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STATE = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => {
    /** @type {?} */
    const templateOptions = {
        label: 'State',
        disabled: disabled
    };
    return Object.assign({}, Field.checkbox('state', Object.assign({}, templateOptions)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LAYOUT = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => (Object.assign({}, Field.field('select', 'layout', {
    label: 'Layout',
    placeholder: 'Select Layout',
    required: true,
    disabled: disabled
}))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const WIDGETS = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => (Object.assign({}, Field.field('checkbox', 'widgets', {
    label: 'Widgets',
    placeholder: 'Select Widgets',
    required: true,
    disabled: disabled
}))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMAIL = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => (Object.assign({}, Field.email('email', {
    placeholder: 'Enter your email',
    required: true,
    disabled: disabled
}))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PERCENTAGE = (/**
 * @param {?} disabled
 * @return {?}
 */
(disabled) => (Object.assign({}, Field.field('percentage', 'percentage', {
    label: 'Enter you percentage from 1 to 100 %',
    description: 'Try to enter 200%',
    disabled: disabled
}))));

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
class FormsLibService {
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
/** @nocollapse */ FormsLibService.ngInjectableDef = defineInjectable({ factory: function FormsLibService_Factory() { return new FormsLibService(); }, token: FormsLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RepeatSectionComponent extends FieldArrayType {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputChipsComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.onDestroy$ = new Subject();
        this.itemControl = new FormControl();
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.filter = this.itemControl.valueChanges.pipe(takeUntil(this.onDestroy$), startWith(null), map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item ? this._filter(item) : this._filter(''))));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // temporary fix for https://github.com/angular/material2/issues/6728
        ((/** @type {?} */ (this.matAutocomplete)))._formField = this.formField;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    /**
     * @return {?}
     */
    get empty() { return this.formControl.value.length === 0; }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        // Add item only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            const input = event.input;
            /** @type {?} */
            const value = event.value;
            // Add item
            if ((value || '').trim()) {
                this.formControl.setValue([
                    ...this.formControl.value,
                    value.trim(),
                ]);
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.itemControl.setValue(null);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.formControl.setValue([
            ...this.formControl.value,
            event.option.viewValue,
        ]);
        this.itemControl.setValue(null);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    remove(i) {
        /** @type {?} */
        const value = this.formControl.value;
        this.formControl.setValue([
            ...value.slice(0, i),
            ...value.slice(i + 1, value.length)
        ]);
        this.formControl.markAsTouched();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        if (!this.to.filter) {
            return [];
        }
        if (!value) {
            return this.to.filter.slice();
        }
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.to.filter.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.toLowerCase().indexOf(filterValue) === 0));
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.formControl.markAsTouched();
        this.field.focus = false;
    }
}
InputChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-input-chips',
                template: "<!-- <p-chips\n  [class.ng-dirty]=\"showError\"\n  [placeholder]=\"to.placeholder\"\n  [formControl]=\"formControl\"\n  [formlyAttributes]=\"field\">\n</p-chips> -->\n<mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let item of formControl.value;let i = index\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(i)\"\n    >\n      {{ item }}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      [formControl]=\"itemControl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n      (blur)=\"onBlur()\"\n    />\n  </mat-chip-list>\n  <mat-autocomplete\n    #auto=\"matAutocomplete\"\n    (optionSelected)=\"selected($event)\"\n  >\n    <mat-option *ngFor=\"let item of (filter | async)\" [value]=\"item\">\n      {{ item }}\n    </mat-option>\n  </mat-autocomplete>"
            }] }
];
InputChipsComponent.propDecorators = {
    matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputPercentageComponent extends FieldType$1 {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelWrapperComponent extends FieldWrapper {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorWrapperComponent extends FieldWrapper {
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
    return `Should have at least ${field.templateOptions.minLength} characters`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxlengthValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function minValidationMessage(err, field) {
    return `This value should be more than ${field.templateOptions.min}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.max}`;
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const config = {
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
class FormsLibModule {
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