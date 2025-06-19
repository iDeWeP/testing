import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import getBorder from './getBorder';
import { getButtonDefaultScale } from './getButtonDefaultScale';
import { getButtonSizeScale } from './getButtonSizeScale';
import { getButtonSpacingScale } from './getButtonSpacingScale';
import { getColor } from './getColor';
import { getFocusable } from './getFocusable';
import { getLoading } from './getLoading';
import { getRingVariant } from './getRingVariant';
import { getVariant } from './getVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledButton = (
  className: string,
  {
    loading = false,
    disabled = false,
    variant = 'none',
    relative = false,
    size = 'md',
    buttonScale = 'normal',
    margin = 'none',
    defaultBorder = false,
    radius = 'none',
    color = 'primary',
    effect = 'none'
  }: Classes
) => {
  const [bgVariant, textVariant] = getVariant(variant);
  const statefulColor = getColor(disabled, color);

  return mergeClasses(
    unstyledButtonConfig.styles.root.default,
    generic.styles.focusable[getFocusable(disabled, loading)],
    relative && generic.styles.position.relative,
    generic.styles.size.normal[size][getButtonSizeScale(buttonScale)],
    generic.styles.scale[getButtonDefaultScale(buttonScale)],
    generic.styles.spacing.normal[size][
      getButtonSpacingScale(buttonScale, defaultBorder)
    ],
    generic.styles.margin[margin],
    generic.styles.border[getBorder(defaultBorder)],
    generic.styles.radius.md[radius],
    generic.styles.size.font[size],
    generic.styles.color.bg[statefulColor][bgVariant],
    generic.styles.color.text[statefulColor][textVariant],
    generic.styles.color.fill[statefulColor][textVariant],
    generic.styles.color.ring[statefulColor][
      getRingVariant(disabled || !!loading, variant)
    ],
    generic.styles.loading[getLoading(loading)],
    generic.styles.effect[effect],
    className
  );
};
