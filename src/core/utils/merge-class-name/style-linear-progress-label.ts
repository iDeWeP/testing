import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLinearProgressLabel = (
  className: string,
  { orientation = 'row', gap = 'unset' }: Classes
) =>
  mergeClasses(
    unstyledLinearProgressConfig.styles.label.default,
    orientation === 'col' && unstyledLinearProgressConfig.styles.label.rotate,
    systemStyles.gap.all[gap],
    className
  );
