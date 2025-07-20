import type { Variant, Color } from '../../types';
import { hasVariantBg } from '../merge-class-name/has-variant-bg';

export const setButtonStyle = (
  variant: Variant,
  color: Color,
  checked?: boolean
) => {
  const isCheckable = checked !== undefined;

  return {
    variant: isCheckable ? (hasVariantBg(variant) ? 'light' : 'text') : variant,
    color: isCheckable && color !== 'unset' ? 'surface' : color
  };
};
