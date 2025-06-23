import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledGrid = (
  className: string,
  {
    flow = 'row',
    justifyContent = 'normal',
    alignContent = 'normal',
    justifyItems = 'stretch',
    alignItems = 'stretch',
    gap = 'none',
    colGap = 'none',
    rowGap = 'none'
  }: Classes
) =>
  mergeClasses(
    generic.styles.display.grid,
    generic.styles.flow[flow],
    generic.styles.justifyContent[justifyContent],
    generic.styles.alignContent[alignContent],
    generic.styles.justifyItems[justifyItems],
    generic.styles.alignItems[alignItems],
    generic.styles.gap.default[gap],
    generic.styles.gap.col[colGap],
    generic.styles.gap.row[rowGap],
    className
  );
