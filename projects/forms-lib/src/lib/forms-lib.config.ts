import { ConfigOption } from '@ngx-formly/core';

  import { RepeatSectionComponent } from './types/repeat-section/repeat-section.component';
  import { InputChipsComponent } from './types/input-chips/input-chips.component';
  import { InputPercentageComponent } from './types/input-percentage/input-percentage.component';
  import { PanelWrapperComponent } from './wrappers/panel-wrapper/panel-wrapper.component';
  import { ErrorWrapperComponent } from './wrappers/error-wrapper/error-wrapper.component';
  import {
    maxlengthValidationMessage,
    maxValidationMessage,
    minlengthValidationMessage,
    minValidationMessage
  } from './helpers/validation-messages';
  import { maximumMoneyValidation } from './helpers/validators';

  export const config: ConfigOption = {
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
