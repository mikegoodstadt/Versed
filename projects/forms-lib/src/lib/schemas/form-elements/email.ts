import { Field } from '../field.model';

export const EMAIL = (disabled) => ({
  ...Field.email(
    'email',
    {
      placeholder: 'Enter your email',
      required: true,
      disabled: disabled
    }
  )
});
