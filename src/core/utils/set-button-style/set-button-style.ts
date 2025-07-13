import type { Variant, Border, Color } from '../../types';
import { getCheckableVariant } from '../merge-class-name/variant';

export const setButtonStyle = (
  variant: Variant,
  border: Border,
  color: Color,
  checked?: boolean
) => ({
  variant: checked === false ? getCheckableVariant(variant) : variant,
  border: checked === false ? 'set' : border,
  color: checked === false ? 'surface' : color
});
