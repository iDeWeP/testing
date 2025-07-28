import { unstyledCircularProgressConfig } from '../../components/UnstyledCircularProgress/unstyledCircularProgressConfig';
import { systemStyle } from '../../config/system-style';
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
  const autoMargin = getSpacing(margin);

  return mergeClasses(
    unstyledCircularProgressConfig.styles.root.default,
    systemStyle.size.default.square[size],
    systemStyle.margin.all[autoMargin.all],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.y[autoMargin.y],
    systemStyle.margin.all[m],
    systemStyle.margin.x[mx],
    systemStyle.margin.y[my],
    systemStyle.margin.t[mt],
    systemStyle.margin.b[mb],
    systemStyle.margin.l[ml],
    systemStyle.margin.r[mr],
    className
  );
};
