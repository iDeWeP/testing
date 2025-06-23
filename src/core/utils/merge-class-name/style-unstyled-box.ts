import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getBorder } from './get-border';
import { getVariant } from './get-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledBox = (
  className: string,
  {
    variant = 'none',
    spacing = 'none',
    scale = 'normal',
    margin = 'none',
    border = false,
    radius = 'none',
    color = 'neutral'
  }: Classes
) => {
  const { bgVariant, textVariant } = getVariant(variant);

  return mergeClasses(
    generic.styles.scale[scale],
    generic.styles.spacing.container[spacing],
    generic.styles.margin[margin],
    generic.styles.border[getBorder(border)],
    generic.styles.radius.lg[radius],
    generic.styles.color.bg[color][bgVariant],
    generic.styles.color.text[color][textVariant],
    generic.styles.color.fill[color][textVariant],
    className
  );
};
