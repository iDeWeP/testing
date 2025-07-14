import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleCheckbox = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.input.default,
    disabled && sharedStyles.cursor.disabled,
    className
  );
