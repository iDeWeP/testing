import { unstyledButtonConfig } from '../../components/UnstyledButton/unstyledButtonConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getBorder } from './get-border';
import { getButtonScale } from './get-button-scale';
import { getColor } from './get-color';
import { getFocusable } from './get-focusable';
import { getLoading } from './get-loading';
import { getRingVariant } from './get-ring-variant';
import { getVariant } from './get-variant';
import { mergeClasses } from './merge-classes';

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
  const [sizeScale, spacingScale] = getButtonScale(buttonScale, defaultBorder);
  const statefulColor = getColor(disabled, color);

  return mergeClasses(
    unstyledButtonConfig.styles.root.default,
    generic.styles.focusable[getFocusable(loading, disabled)],
    relative && generic.styles.position.relative,
    generic.styles.size.normal[size][sizeScale],
    generic.styles.scale[buttonScale],
    generic.styles.spacing.normal[size][spacingScale],
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
