import { sharedStyles } from '../../config/shared-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleCheckbox = (
  className: string,
  { disabled = false }: Classes
): ClassName =>
  mergeClasses(
    sharedStyles.input,
    disabled && sharedStyles.cursor.disabled,
    className
  );
