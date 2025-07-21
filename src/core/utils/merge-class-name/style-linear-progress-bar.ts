import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { getReversedColor } from './get-reversed-color';
import { hasVariantBg } from './has-variant-bg';
import { mergeClasses } from './merge-classes';

export const styleLinearProgressBar = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'light',
    orientation = 'row',
    color = 'unset',
    decorated = false
  }: Classes
) => {
  const colors = getColor(
    variant === 'light' ? 'light' : 'solid',
    hasVariantBg(variant) ? color : getReversedColor(color),
    { disabled }
  );

  return mergeClasses(
    unstyledLinearProgressConfig.styles.bar.default,
    decorated && unstyledLinearProgressConfig.styles.bar.decorated,
    unstyledLinearProgressConfig.styles.bar.orientation[orientation],
    systemStyles.color.default.bg[theme][colors.text],
    systemStyles.color.default.text[theme][colors.bg],
    systemStyles.color.default.fill[theme][colors.bg],
    className
  );
};
