import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getFocusableContainerState } from './state';

export const styleUnstyledCheckbox = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.input.default,
    sharedStyles.focusable[getFocusableContainerState(disabled)],
    className
  );
