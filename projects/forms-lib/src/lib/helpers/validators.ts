export function maximumMoneyValidation(control, type) {
  const value = control.value;
  if (value) {
    const unMasked = parseInt(value.replace(/\D/g, ''));
    if (unMasked > 10000) {
      return { maximumMoneyValidation: 'Should be bellow 10.000' };
    }
  }
  return null;
}

export function UuidValidation(control, type) {
  const value = control.value;
  if (value) {
    const uuidValid = true; // UuidService.textUuid(value);

    if (!uuidValid) {
      return { UuidValidation: 'UUID not valid' };
    }
  }
  return null;
}
