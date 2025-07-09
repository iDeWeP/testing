import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInput = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    sharedStyles.input.default,
    disabled && sharedStyles.cursor.disabled,
    className
  );
