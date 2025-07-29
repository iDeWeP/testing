import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { mergeClasses } from './merge-classes';

export const styleSwitchIcon = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'solid',
    defaultSize = 'md',
    switchScale = 'default',
    color = 'unset',
    decorated = false
  }: Classes
): ClassName => {
  const isDefault = switchScale === 'default';
  const placementType = decorated ? 'decorated' : 'default';
  const uncheckedColor = getColor(variant, color, {
    checked: false,
    valid,
    invalid,
    disabled
  }).text;
  const checkedColor = getColor(variant, color, {
    checked: true,
    valid,
    invalid,
    disabled
  }).text;

  return mergeClasses(
    unstyledSwitchConfig.styles.icon.default,
    unstyledSwitchConfig.styles.icon.placement[placementType][defaultSize],
    systemStyle.size.text.square[defaultSize],
    isDefault && systemStyle.padding.default.all['xs-xs'],
    systemStyle.color.default.fill[theme][uncheckedColor],
    unstyledSwitchConfig.styles.icon.color[theme][checkedColor],
    className
  );
};
