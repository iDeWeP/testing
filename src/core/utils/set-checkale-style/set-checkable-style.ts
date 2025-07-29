import type { Variant, Color, CheckableVariant } from '../../types';
import { getCheckableVariants } from '../get-checkable-variants/get-checkable-variants';

type Style = {
  autoVariant: Variant;
  autoColor: Color;
  defaultVariant: Variant;
  defaultColor: Color;
};

export const setCheckableStyle = (
  variant: CheckableVariant,
  color: Color,
  checked?: boolean,
  defaultVariant?: Variant
): Style => {
  const isUnchecked = checked === false;
  const [uncheckedVariant, checkedVariant] = getCheckableVariants(
    variant,
    defaultVariant
  );

  return {
    autoVariant: isUnchecked ? uncheckedVariant : checkedVariant,
    autoColor: isUnchecked && color !== 'unset' ? 'surface' : color,
    defaultVariant: checkedVariant,
    defaultColor: color
  };
};
