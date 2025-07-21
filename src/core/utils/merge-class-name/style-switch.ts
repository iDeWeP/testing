import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleSwitch = (
  className: string,
  { disabled = false, defaultSize = 'md', decorated = false }: Classes
) =>
  mergeClasses(
    sharedStyles.input,
    decorated && sharedStyles.position.absolute,
    decorated && sharedStyles.placement.center,
    decorated && unstyledSwitchConfig.styles.shared.size.default[defaultSize],
    disabled && sharedStyles.cursor.disabled,
    className
  );
