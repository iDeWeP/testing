import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitchRipple = (
  className: string,
  { defaultSize = 'md', switchScale = 'default' }: Classes
): ClassName => {
  const isSlider = switchScale === 'slider';

  return mergeClasses(
    isSlider && sharedStyle.transition['bg-left'],
    isSlider && unstyledSwitchConfig.styles.ripple.placement[defaultSize],
    isSlider && systemStyle.size.default.square[defaultSize],
    className
  );
};
