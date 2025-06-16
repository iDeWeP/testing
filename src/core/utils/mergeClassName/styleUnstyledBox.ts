import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import getBorder from './getBorder';
import { getVariant } from './getVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledBox = (
  className: string,
  {
    variant = 'surface',
    spacing = 'none',
    scale = 'normal',
    margin = 'none',
    border = false,
    radius = 'none',
    color = 'neutral'
  }: Classes
) => {
  const [bgVariant, textVariant] = getVariant(variant);

  return mergeClasses(
    generic.styles.scale[scale],
    generic.styles.size.spacing[spacing],
    generic.styles.margin[margin],
    generic.styles.border[getBorder(border)],
    generic.styles.radius.lg[radius],
    generic.styles.color.bg[color][bgVariant],
    generic.styles.color.border[color][textVariant],
    generic.styles.color.text[color][textVariant],
    generic.styles.color.fill[color][textVariant],
    className
  );
};
