import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleLinearProgressBar = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'solid',
    orientation = 'row',
    color = 'unset',
    decorated = false
  }: Classes
) => {
  const colors = getColor(variant, color, disabled);

  return mergeClasses(
    unstyledLinearProgressConfig.styles.bar.default,
    decorated && unstyledLinearProgressConfig.styles.bar.decorated,
    unstyledLinearProgressConfig.styles.bar.orientation[orientation],
    systemStyles.color.bg[theme][colors.bg],
    systemStyles.color.text[theme][colors.text],
    systemStyles.color.fill[theme][colors.text],
    className
  );
};
