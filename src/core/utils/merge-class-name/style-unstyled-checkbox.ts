import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getFocusableState } from './state';

export const styleUnstyledCheckbox = (
  className: string,
  { disabled = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.input.default,
    generic.styles.focusable[getFocusableState(disabled)],
    className
  );
