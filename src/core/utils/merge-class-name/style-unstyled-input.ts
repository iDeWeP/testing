import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInput = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.input.default,
    disabled && generic.styles.focusable.disabled,
    className
  );
