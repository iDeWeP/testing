export const getSpinnerAnimation = (spin: boolean, isDisabled: boolean) =>
  !spin || isDisabled ? 'rotate' : 'spin';
