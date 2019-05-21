import { Field } from '../field.model';

export const UUID = (disabled) => {
  const templateOptions = {
    label: 'UUID',
    placeholder: 'Enter UUID',
    required: true,
    disabled: true
  };

  return {
    ...Field.input(
      'uuid',
      {
        ...templateOptions
      }
    )
  };
};
