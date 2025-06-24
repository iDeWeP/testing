import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getFocusable } from './get-focusable';
import { mergeClasses } from './merge-classes';

export const styleUnstyledCheckbox = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.input.default,
    generic.styles.focusable[getFocusable(disabled)],
    className
  );
