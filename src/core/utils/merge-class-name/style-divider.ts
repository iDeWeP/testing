import { unstyledDividerConfig } from '../../components/UnstyledDivider/unstyledDividerConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getDividerSpacing } from './get-divider-spacing';
import { mergeClasses } from './merge-classes';

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
): ClassName => {
  const autoPadding = getDividerSpacing(orientation, padding);
  const autoMargin = getDividerSpacing(orientation, margin);
  const autoColor = getColor('text', color).text;

  return mergeClasses(
    sharedStyle.display.flex,
    decorated && unstyledDividerConfig.styles.root.decorated,
    unstyledDividerConfig.styles.root.orientation[orientation],
    systemStyle.padding.default.x[autoPadding.x],
    systemStyle.padding.default.y[autoPadding.y],
    systemStyle.padding.default.all[p],
    systemStyle.padding.default.x[px],
    systemStyle.padding.default.y[py],
    systemStyle.padding.default.t[pt],
    systemStyle.padding.default.b[pb],
    systemStyle.padding.default.l[pl],
    systemStyle.padding.default.r[pr],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.y[autoMargin.y],
    systemStyle.margin.all[m],
    systemStyle.margin.x[mx],
    systemStyle.margin.y[my],
    systemStyle.margin.t[mt],
    systemStyle.margin.b[mb],
    systemStyle.margin.l[ml],
    systemStyle.margin.r[mr],
    decorated && systemStyle.size.font[font],
    systemStyle.color.default.text[theme][autoColor],
    decorated && systemStyle.color.default.fill[theme][autoColor],
    decorated && systemStyle.gap.all[gap],
    className
  );
};
