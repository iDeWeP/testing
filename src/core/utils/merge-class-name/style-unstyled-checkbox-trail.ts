import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getVariant, getRingVariant } from './variants';

export const styleUnstyledCheckboxTrail = (
  className: string,
  {
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'none',
    size = 'md',
    radius = 'none',
    color = 'neutral'
  }: Classes
) => {
  const colorVariant = getColor(color, disabled, valid, invalid);

  return mergeClasses(
    unstyledCheckboxConfig.styles.trail.default,
    generic.styles.size.text.square[size],
    generic.styles.radius.sm[radius],
    generic.styles.color.bg.disabled[getVariant('none', disabled).bgVariant],
    generic.styles.color.border[colorVariant][getVariant(variant).textVariant],
    generic.styles.color.ring[colorVariant][getRingVariant(variant, disabled)],
    className
  );
};
