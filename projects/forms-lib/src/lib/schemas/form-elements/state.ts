import { Field } from '../field.model';

export const STATE = (disabled) => {
  const templateOptions = {
    label: 'State',
    disabled: disabled
  };

  return {
    ...Field.checkbox(
      'state',
      {
        ...templateOptions
      }
    )
  };
};
