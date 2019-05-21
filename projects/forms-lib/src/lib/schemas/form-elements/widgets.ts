import { Field } from '../field.model';

export const WIDGETS = (disabled) => ({
  ...Field.field(
    'checkbox',
    'widgets',
    {
      label: 'Widgets',
      placeholder: 'Select Widgets',
      required: true,
      disabled: disabled
    }
  )
});
