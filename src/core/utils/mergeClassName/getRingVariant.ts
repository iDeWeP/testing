import type { Variant } from '../../types';
import { getVariant } from './getVariant';

export const getRingVariant = (isDisabled: boolean, variant: Variant) =>
  isDisabled ? 'none' : getVariant(variant)[1];
