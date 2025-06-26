import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getButtonScale } from './scale';
import { getFocusableState, getLoadingState } from './state';
import { getVariant, getRingVariant } from './variant';

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
    border = false,
    radius = 'none',
    color = 'primary',
    effect = 'none'
  }: Classes
) => {
  const { bgVariant, textVariant } = getVariant(variant);
  const { sizeScale, spacingScale } = getButtonScale(buttonScale, border);
  const statefulColor = getColor(color, disabled);

  return mergeClasses(
    unstyledButtonConfig.styles.root.default,
    generic.styles.focusable[getFocusableState(disabled, loading)],
    relative && generic.styles.position.relative,
    generic.styles.size.normal[sizeScale][size],
    generic.styles.scale[buttonScale],
    generic.styles.spacing.normal[spacingScale][size],
    generic.styles.margin[margin],
    generic.styles.border[getBorder(border)],
    generic.styles.radius.md[radius],
    generic.styles.size.font[size],
    generic.styles.color.bg[statefulColor][bgVariant],
    generic.styles.color.text[statefulColor][textVariant],
    generic.styles.color.fill[statefulColor][textVariant],
    generic.styles.color.ring[statefulColor][
      getRingVariant(variant, disabled || !!loading)
    ],
    generic.styles.loading[getLoadingState(loading)],
    generic.styles.effect[effect],
    className
  );
};
