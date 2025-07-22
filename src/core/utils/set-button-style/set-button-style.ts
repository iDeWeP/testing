import type { Variant, Color } from '../../types';
import { hasVariantBg } from '../merge-class-name/has-variant-bg';

type Styles = {
  variant: Variant;
  color: Color;
};

export const setButtonStyle = (
  variant: Variant,
  color: Color,
  checked?: boolean
): Styles => {
  const isCheckable = checked !== undefined;
  const checkableVariant = hasVariantBg(variant) ? 'light' : variant;

  return {
    variant: isCheckable ? checkableVariant : variant,
    color: isCheckable && color !== 'unset' ? 'surface' : color
  };
};
