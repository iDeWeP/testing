import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getSpacing } from './spacing';

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
) => {
  const margins = getSpacing(margin);

  return mergeClasses(
    circularProgressConfig.styles.root.default,
    systemStyles.size.normal.square[size],
    systemStyles.margin.all[margins.all],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
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
