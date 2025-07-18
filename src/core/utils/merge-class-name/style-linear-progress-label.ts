import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLinearProgressLabel = (
  className: string,
  { orientation = 'row', gap = 'unset' }: Classes
) =>
  mergeClasses(
    unstyledLinearProgressConfig.styles.label.default,
    orientation === 'col' && sharedStyles.rotate['-90'],
    systemStyles.gap.all[gap],
    className
  );
