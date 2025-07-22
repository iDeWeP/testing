import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { mergeClasses } from './merge-classes';

export const styleSwitchIcon = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'solid',
    defaultSize = 'md',
    switchScale = 'default',
    color = 'unset',
    decorated = false
  }: Classes
): ClassName => {
  const isNormal = switchScale === 'default';
  const placementType = decorated ? 'decorated' : 'default';
  const uncheckedTextColor = getColor(variant, color, { disabled }, false).text;
  const checkedTextColor = getColor(variant, color, { disabled }, true).text;

  return mergeClasses(
    unstyledSwitchConfig.styles.icon.default,
    unstyledSwitchConfig.styles.icon.placement[placementType][defaultSize],
    systemStyles.size.text.square[defaultSize],
    isNormal && systemStyles.padding.default.all['xs-xs'],
    systemStyles.color.default.fill[theme][uncheckedTextColor],
    unstyledSwitchConfig.styles.icon.color[theme][checkedTextColor],
    className
  );
};
