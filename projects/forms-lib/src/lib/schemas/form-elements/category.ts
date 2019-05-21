import { Field } from '../field.model';

export const CATEGORY = (disabled) => ({
  ...Field.field(
    'chips',
    'category',
    {
      label: 'Category',
      placeholder: 'Enter Category',
      required: true,
      disabled: disabled
    }
  )
});
