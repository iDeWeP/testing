import type { InputVariant, DefaultInputVariant } from '../../types';

export const getInputVariant = (
  variant: InputVariant,
  isDisabled?: boolean,
  valid?: boolean,
  invalid?: boolean
) => {
  const variants = variant.split('-');
  const textVariant = variants[1] === 'plain' ? 'on' : 'default';

  return {
    textVariant,
    variant: variants[0] as DefaultInputVariant,
    bgVariant: isDisabled || variants[0] === 'light' ? 'light' : 'none',
    focusedVariant: isDisabled || valid || invalid ? 'none' : textVariant
  };
};
