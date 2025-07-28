import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleCheckbox = (
  className: string,
  { disabled = false }: Classes
): ClassName =>
  mergeClasses(
    sharedStyle.input,
    disabled && sharedStyle.cursor.disabled,
    className
  );
