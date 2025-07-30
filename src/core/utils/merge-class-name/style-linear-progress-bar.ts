import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
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
): ClassName => {
  const autoColor = getColor(
    variant === 'light' ? 'light' : 'solid',
    hasVariantBg(variant) ? color : getReversedColor(color),
    { disabled }
  );

  return mergeClasses(
    unstyledLinearProgressConfig.styles.bar.default,
    unstyledLinearProgressConfig.styles.bar.orientation[orientation],
    systemStyle.color.default.bg[theme][autoColor.text],
    decorated && unstyledLinearProgressConfig.styles.bar.decorated,
    decorated && systemStyle.color.default.text[theme][autoColor.bg],
    decorated && systemStyle.color.default.fill[theme][autoColor.bg],
    className
  );
};
