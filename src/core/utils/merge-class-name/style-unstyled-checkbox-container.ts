import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getInputScale } from './scale';

export const styleUnstyledCheckboxContainer = (
  className: string,
  { size = 'md', hasRipple = false }: Classes
) =>
  mergeClasses(
    unstyledCheckboxConfig.styles.root.default,
    systemStyles.size[getInputScale(hasRipple)].square[size],
    className
  );
