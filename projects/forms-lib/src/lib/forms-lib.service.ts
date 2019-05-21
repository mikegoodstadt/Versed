import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as ELEMENTS from './schemas/form-elements';

@Injectable({
  providedIn: 'root'
})
export class FormsLibService {

  constructor() { }
  public getDefaultForm(): FormlyFieldConfig[] {
    return null; // DEFAULT_FORM().template;
  }

  public getFormById(id: string, disabled = false) {
    return null; // FORMS_VALUES(disabled)[id];
  }

  private generateCleanConfiguration(clone: object[]) {
    return JSON.parse(JSON.stringify(clone));
  }

  public getModelFields(model: any): FormlyFieldConfig[] {
    // for each model prop test type and generate appropriate formfield
    const fields = Object.keys(model);
    const fieldConfig = [];
    for (const field of fields) {
      const fieldFn: string = field.toUpperCase();
      let fieldOps = {};
      if (typeof ELEMENTS[fieldFn] === 'function') {
        // console.log('FormsLib ELEMENTS contains: ', fieldFn);
        fieldOps = ELEMENTS[fieldFn]();
        fieldConfig.push(fieldOps);
      } else {
        console.log('FormsLib ELEMENTS does not contain field: ', field);
      }
    }
    // console.log(fieldConfig);
    return fieldConfig;
  }
}
