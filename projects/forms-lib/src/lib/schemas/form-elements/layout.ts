import { Field } from '../field.model';

export const LAYOUT = (disabled) => ({
  ...Field.field(
    'select',
    'layout',
    {
      label: 'Layout',
      placeholder: 'Select Layout',
      required: true,
      disabled: disabled
    }
  )
});
