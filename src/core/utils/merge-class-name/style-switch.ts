import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitch = (
  className: string,
  {
    disabled = false,
    defaultSize = 'md',
    switchScale = 'default',
    decorated = false
  }: Classes
) => {
  const isFloating = decorated && switchScale === 'slider';

  return mergeClasses(
    sharedStyles.input,
    isFloating && sharedStyles.position.absolute,
    isFloating && sharedStyles.placement.center,
    isFloating && unstyledSwitchConfig.styles.shared.size.default[defaultSize],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
