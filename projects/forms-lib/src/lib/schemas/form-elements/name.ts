import { Field } from '../field.model';

export const NAME = (disabled) => {
  const templateOptions = {
    label: 'Name',
    placeholder: 'Enter your name',
    required: true,
    disabled: disabled
  };

  return {
    ...Field.input(
      'name',
      {
        ...templateOptions
      }
    )
  };
};
