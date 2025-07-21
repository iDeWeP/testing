import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitchRipple = (
  className: string,
  { defaultSize = 'md', switchScale = 'default' }: Classes
) =>
  mergeClasses(
    switchScale === 'slider' && sharedStyles.transition['bg-left'],
    switchScale === 'slider' &&
      unstyledSwitchConfig.styles.ripple.placement[defaultSize],
    switchScale === 'slider' && systemStyles.size.default.square[defaultSize],
    className
  );
