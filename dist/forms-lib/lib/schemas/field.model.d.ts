import { FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
export declare class Field {
    static field(type: string, key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static input(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static email(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static password(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static checkbox(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static select(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static textarea(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
    static radio(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig;
}
