import type { Variant, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';

export const setBorder = (
  variant: Variant,
  border: Border,
  isChecked?: boolean
): Border => (isAutoBordered(variant, border, isChecked) ? 'set' : border);
