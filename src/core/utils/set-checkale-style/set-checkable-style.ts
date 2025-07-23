import type { Variant, Color, CheckableVariant } from '../../types';
import { getCheckableVariants } from '../get-checkable-variants/get-checkable-variants';

type Style = {
  currentVariant: Variant;
  currentColor: Color;
  defaultVariant: Variant;
  defaultColor: Color;
};

export const setCheckableStyle = (
  variant: CheckableVariant,
  color: Color,
  checked?: boolean
): Style => {
  const isUnchecked = checked === false;
  const [uncheckedVariant, checkedVariant] = getCheckableVariants(variant);

  return {
    currentVariant: isUnchecked ? uncheckedVariant : checkedVariant,
    currentColor: isUnchecked && color !== 'unset' ? 'surface' : color,
    defaultVariant: checkedVariant,
    defaultColor: color
  };
};
