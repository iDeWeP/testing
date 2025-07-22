import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleCircularProgressContainer = (
  className: string,
  {
    size = 'md',
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset'
  }: Classes
): ClassName => {
  const marginType = getSpacing(margin);

  return mergeClasses(
    circularProgressConfig.styles.root.default,
    systemStyles.size.default.square[size],
    systemStyles.margin.all[marginType.all],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.y[marginType.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    className
  );
};
