import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInputClearance = (
  className: string,
  { gap = 'unset' }: Classes
): ClassName =>
  mergeClasses(
    unstyledInputConfig.styles.clearance.default,
    unstyledInputConfig.styles.shared.label,
    systemStyle.gap.all[gap],
    className
  );
