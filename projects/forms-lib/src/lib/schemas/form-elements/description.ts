import { Field } from '../field.model';

export const DESCRIPTION = (disabled) => {
  const templateOptions = {
    label: 'Description',
    placeholder: 'Enter Description',
    required: true,
    disabled: disabled
  };

  return {
    ...Field.input(
      'description',
      {
        ...templateOptions
      }
    )
  };
};
