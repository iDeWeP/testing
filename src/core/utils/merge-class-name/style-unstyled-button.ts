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
    theme = 'light',
    loading = false,
    disabled = false,
    variant = 'none',
    relative = false,
    size = 'md',
    buttonScale = 'normal',
    margin = 'none',
    border = false,
    radius = 'none',
    color = 'neutral',
    effect = 'none'
  }: Classes
) => {
  const { bgVariant, textVariant } = getVariant(variant, disabled);
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
    generic.styles.radius[radius],
    generic.styles.size.font[size],
    generic.styles.color.bg[theme][statefulColor][bgVariant],
    generic.styles.color.text[theme][statefulColor][textVariant],
    generic.styles.color.fill[theme][statefulColor][textVariant],
    generic.styles.color.ring[theme][statefulColor][
      getRingVariant(variant, disabled || !!loading)
    ],
    generic.styles.loading[getLoadingState(loading)],
    generic.styles.effect[effect],
    className
  );
};
