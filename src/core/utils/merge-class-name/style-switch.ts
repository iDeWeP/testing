import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitch = (
  className: string,
  {
    disabled = false,
    defaultSize = 'md',
    switchScale = 'default',
    decorated = false
  }: Classes
): ClassName => {
  const isFloating = decorated && switchScale === 'slider';

  return mergeClasses(
    sharedStyle.input,
    isFloating && sharedStyle.position.absolute,
    isFloating && sharedStyle.placement.center,
    isFloating && unstyledSwitchConfig.styles.shared.size.default[defaultSize],
    disabled && sharedStyle.cursor.disabled,
    className
  );
};
