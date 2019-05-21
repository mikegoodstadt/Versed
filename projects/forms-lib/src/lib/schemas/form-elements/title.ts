import { Field } from '../field.model';

export const TITLE = (disabled) => {
  const templateOptions = {
    label: 'Title',
    placeholder: 'Enter Title',
    required: true,
    disabled: disabled
  };

  return {
    ...Field.input(
      'title',
      {
        ...templateOptions
      }
    )
  };
};
