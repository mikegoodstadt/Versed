import { FormlyFieldConfig } from '@ngx-formly/core';
export declare class FormsLibService {
    constructor();
    getDefaultForm(): FormlyFieldConfig[];
    getFormById(id: string, disabled?: boolean): any;
    private generateCleanConfiguration;
    getModelFields(model: any): FormlyFieldConfig[];
}
