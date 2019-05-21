export declare const STATE: (disabled: any) => {
    model?: any;
    parent?: import("@ngx-formly/core").FormlyFieldConfig;
    options?: import("@ngx-formly/core").FormlyFormOptions;
    form?: import("@angular/forms").FormGroup;
    key?: string;
    id?: string;
    name?: string;
    templateOptions?: import("@ngx-formly/core").FormlyTemplateOptions;
    optionsTypes?: string[];
    validation?: {
        [additionalProperties: string]: any;
        messages?: {
            [messageProperties: string]: string | ((error: any, field: import("@ngx-formly/core").FormlyFieldConfig) => string);
        };
        show?: boolean;
    };
    validators?: any;
    asyncValidators?: any;
    template?: string;
    wrappers?: string[];
    hide?: boolean;
    hideExpression?: string | boolean | ((model: any, formState: any, field?: import("@ngx-formly/core").FormlyFieldConfig) => boolean);
    expressionProperties?: {
        [property: string]: string | import("rxjs").Observable<any> | ((model: any, formState: any, field?: import("@ngx-formly/core").FormlyFieldConfig) => any);
    };
    formControl?: import("@angular/forms").AbstractControl;
    className?: string;
    fieldGroupClassName?: string;
    fieldGroup?: import("@ngx-formly/core").FormlyFieldConfig[];
    fieldArray?: import("@ngx-formly/core").FormlyFieldConfig;
    type?: string;
    focus?: boolean;
    modelOptions?: {
        debounce?: {
            default: number;
        };
        updateOn?: "change" | "blur" | "submit";
    };
    hooks?: import("@ngx-formly/core/lib/components/formly.field.config").FormlyLifeCycleOptions<import("@ngx-formly/core/lib/components/formly.field.config").FormlyHookFn>;
    lifecycle?: import("@ngx-formly/core/lib/components/formly.field.config").FormlyLifeCycleOptions<import("@ngx-formly/core/lib/components/formly.field.config").FormlyLifeCycleFn>;
    defaultValue?: any;
    parsers?: ((value: any) => {})[];
};
