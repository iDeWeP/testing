import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { mergeClasses } from './merge-classes';
import { getVariant } from './variant';

export const styleUnstyledBox = (
  className: string,
  {
    theme = 'light',
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
    generic.styles.radius[radius],
    generic.styles.color.bg[theme][color][bgVariant],
    generic.styles.color.text[theme][color][textVariant],
    generic.styles.color.fill[theme][color][textVariant],
    className
  );
};
