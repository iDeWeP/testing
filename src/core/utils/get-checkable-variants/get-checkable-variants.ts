import type { CheckableVariant, Variant } from '../../types';

export const getCheckableVariants = (
  variant: CheckableVariant,
  defaultVariant?: Variant
): [Variant, Variant] => {
  const variants = variant.split('-') as Variant[];

  return variants.length === 1
    ? [defaultVariant || 'outlined', variants[0]]
    : [variants[0], variants[1]];
};
