import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getAutoRadius } from './get-auto-radius';
import { getBorder } from './get-border';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleCardBody = (
  className: string,
  {
    variant = 'solid',
    cardPlacement = 'default',
    padding = 'unset',
    margin = 'unset',
    border = 'unset',
    radius = 'unset'
  }: Classes
): ClassName => {
  const autoPadding = getSpacing(padding, cardPlacement);
  const autoMargin = getSpacing(margin, cardPlacement);
  const autoBorder = getBorder(variant, border, { placement: cardPlacement });
  const autoRadius = getAutoRadius(cardPlacement, radius);

  return mergeClasses(
    systemStyle.padding.default.all[autoPadding.all],
    systemStyle.padding.default.x[autoPadding.x],
    systemStyle.padding.default.y[autoPadding.y],
    systemStyle.padding.default.t[autoPadding.t],
    systemStyle.padding.default.b[autoPadding.b],
    systemStyle.margin.all[autoMargin.all],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.y[autoMargin.y],
    systemStyle.margin.t[autoMargin.t],
    systemStyle.margin.b[autoMargin.b],
    systemStyle.border.all[autoBorder.all],
    systemStyle.border.x[autoBorder.x],
    systemStyle.border.t[autoBorder.t],
    systemStyle.border.b[autoBorder.b],
    systemStyle.radius[autoRadius.type][autoRadius.radius],
    className
  );
};
