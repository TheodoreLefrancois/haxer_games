export const specialKeys = [
  {
    disabled: false,
    included: false,
    found: false,
    value: 'DEL',
  },
  {
    disabled: false,
    included: false,
    found: false,
    value: 'VAL',
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
