import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getVariant, getRingVariant } from './variant';

export const styleUnstyledCheckboxIcon = (
  className: string,
  {
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'none',
    size = 'md',
    border = false,
    radius = 'none',
    color = 'neutral'
  }: Classes
) => {
  const { bgVariant, textVariant } = getVariant(variant);
  const colorVariant = getColor(color, disabled, valid, invalid);

  return mergeClasses(
    unstyledCheckboxConfig.styles.icon.default,
    generic.styles.size.text.square[size],
    generic.styles.border[getBorder(border)],
    generic.styles.radius[radius],
    generic.styles.color.bg[colorVariant][bgVariant],
    generic.styles.color.border[colorVariant][textVariant],
    generic.styles.color.fill[colorVariant][textVariant],
    generic.styles.color.ring[colorVariant][getRingVariant(variant, disabled)],
    className
  );
};
