import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) => {
  const paddings = getSpacing(padding, 'bottom');
  const margins = getSpacing(margin, 'bottom');
  const borders = getBorder(variant, border, 'bottom');

  return mergeClasses(
    sharedStyles.display.flex,
    systemStyles.padding.default.x[paddings.x],
    systemStyles.padding.default.b[paddings.b],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.b[margins.b],
    systemStyles.border.x[borders.x],
    systemStyles.border.b[borders.b],
    systemStyles.radius.b[radius],
    sharedStyles.direction[orientation],
    className
  );
};
