import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitchRipple = (
  className: string,
  { defaultSize = 'md', switchScale = 'default' }: Classes
): ClassName => {
  const isSlider = switchScale === 'slider';

  return mergeClasses(
    isSlider && sharedStyles.transition['bg-left'],
    isSlider && unstyledSwitchConfig.styles.ripple.placement[defaultSize],
    isSlider && systemStyles.size.default.square[defaultSize],
    className
  );
};
