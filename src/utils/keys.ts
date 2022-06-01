export const specialKeys = [
  {
    disabled: false,
    included: false,
    found: false,
    value: 'Backspace',
  },
  {
    disabled: false,
    included: false,
    found: false,
    value: 'Enter',
  },
];
export const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

export const keys = alphabet
  .split('')
  .map((letter) => ({
    value: letter,
    disabled: false,
    included: false,
    found: false,
  }))
  .concat(specialKeys);
