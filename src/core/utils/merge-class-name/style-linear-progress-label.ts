import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLinearProgressLabel = (
  className: string,
  { orientation = 'row', gap = 'unset' }: Classes
): ClassName =>
  mergeClasses(
    unstyledLinearProgressConfig.styles.label.default,
    orientation === 'col' && sharedStyle.rotate['-90'],
    systemStyle.gap.all[gap],
    className
  );
