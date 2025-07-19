import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder } from './get-border';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleCardBody = (
  className: string,
  {
    variant = 'solid',
    orientation = 'row',
    cardPlacement = 'none',
    padding = 'unset',
    margin = 'unset',
    border = 'unset',
    radius = 'unset'
  }: Classes
) => {
  const paddings = getSpacing(padding, cardPlacement);
  const margins = getSpacing(margin, cardPlacement);
  const borders = getBorder(variant, border, cardPlacement);

  return mergeClasses(
    sharedStyles.display.flex,
    systemStyles.padding.default.all[paddings.all],
    systemStyles.padding.default.x[paddings.x],
    systemStyles.padding.default.y[paddings.y],
    systemStyles.padding.default.t[paddings.t],
    systemStyles.padding.default.b[paddings.b],
    systemStyles.margin.all[margins.all],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
    systemStyles.margin.t[margins.t],
    systemStyles.margin.b[margins.b],
    systemStyles.border.all[borders.all],
    systemStyles.border.x[borders.x],
    systemStyles.border.t[borders.t],
    systemStyles.border.b[borders.b],
    systemStyles.radius.b[radius],
    sharedStyles.direction[orientation],
    className
  );
};
