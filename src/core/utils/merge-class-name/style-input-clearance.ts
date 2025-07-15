import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInputClearance = (
  className: string,
  { gap = 'unset' }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.clearance.default,
    unstyledInputConfig.styles.generic.default,
    systemStyles.gap.all[gap],
    className
  );
