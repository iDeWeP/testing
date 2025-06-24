import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getInputScale } from './scale';

export const styleUnstyledCheckboxContainer = (
  className: string,
  { size = 'md', hasRipple = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.root.default,
    generic.styles.size[getInputScale(hasRipple)].square[size],
    className
  );
