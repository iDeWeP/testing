import { unstyledDividerConfig } from '../../components/UnstyledDivider/unstyledDividerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getDividerSpacing } from './spacing';

export const styleDivider = (
  className: string,
  {
    theme = 'light',
    orientation = 'row',
    padding = 'unset',
    p = 'unset',
    px = 'unset',
    py = 'unset',
    pt = 'unset',
    pb = 'unset',
    pl = 'unset',
    pr = 'unset',
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    font = 'unset',
    color = 'unset',
    gap = 'unset',
    decorated = false
  }: Classes
) => {
  const paddings = getDividerSpacing(orientation, padding);
  const margins = getDividerSpacing(orientation, margin);
  const textColor = getColor('text', color).text;

  return mergeClasses(
    sharedStyles.display.flex,
    decorated && unstyledDividerConfig.styles.root.decorated,
    unstyledDividerConfig.styles.root.orientation[orientation],
    systemStyles.padding.default.x[paddings.x],
    systemStyles.padding.default.y[paddings.y],
    systemStyles.padding.default.all[p],
    systemStyles.padding.default.x[px],
    systemStyles.padding.default.y[py],
    systemStyles.padding.default.t[pt],
    systemStyles.padding.default.b[pb],
    systemStyles.padding.default.l[pl],
    systemStyles.padding.default.r[pr],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    decorated && systemStyles.size.font[font],
    systemStyles.color.text[theme][textColor],
    decorated && systemStyles.color.fill[theme][textColor],
    decorated && systemStyles.gap.all[gap],
    className
  );
};
