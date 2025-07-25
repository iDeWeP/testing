import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getBorder } from './get-border';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleCardFooter = (
  className: string,
  {
    variant = 'solid',
    orientation = 'row',
    padding = 'unset',
    margin = 'unset',
    border = 'unset',
    radius = 'unset'
  }: Classes
): ClassName => {
  const autoPadding = getSpacing(padding, 'bottom');
  const autoMargin = getSpacing(margin, 'bottom');
  const autoBorder = getBorder(variant, border, { placement: 'bottom' });

  return mergeClasses(
    sharedStyle.display.flex,
    systemStyle.padding.default.x[autoPadding.x],
    systemStyle.padding.default.b[autoPadding.b],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.b[autoMargin.b],
    systemStyle.border.x[autoBorder.x],
    systemStyle.border.b[autoBorder.b],
    systemStyle.radius.b[radius],
    sharedStyle.direction[orientation],
    className
  );
};
