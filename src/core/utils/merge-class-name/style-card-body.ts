import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getBorder } from './get-border';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleCardBody = (
  className: string,
  {
    variant = 'solid',
    orientation = 'row',
    cardPlacement = 'default',
    padding = 'unset',
    margin = 'unset',
    border = 'unset',
    radius = 'unset'
  }: Classes
): ClassName => {
  const paddingType = getSpacing(padding, cardPlacement);
  const marginType = getSpacing(margin, cardPlacement);
  const borderType = getBorder(variant, border, { placement: cardPlacement });

  return mergeClasses(
    sharedStyles.display.flex,
    systemStyles.padding.default.all[paddingType.all],
    systemStyles.padding.default.x[paddingType.x],
    systemStyles.padding.default.y[paddingType.y],
    systemStyles.padding.default.t[paddingType.t],
    systemStyles.padding.default.b[paddingType.b],
    systemStyles.margin.all[marginType.all],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.y[marginType.y],
    systemStyles.margin.t[marginType.t],
    systemStyles.margin.b[marginType.b],
    systemStyles.border.all[borderType.all],
    systemStyles.border.x[borderType.x],
    systemStyles.border.t[borderType.t],
    systemStyles.border.b[borderType.b],
    systemStyles.radius.b[radius],
    sharedStyles.direction[orientation],
    className
  );
};
