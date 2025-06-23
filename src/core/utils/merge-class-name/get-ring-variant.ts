import type { Variant } from '../../types';
import { getVariant } from './get-variant';

export const getRingVariant = (isDisabled: boolean, variant: Variant) =>
  isDisabled ? 'none' : getVariant(variant).textVariant;
