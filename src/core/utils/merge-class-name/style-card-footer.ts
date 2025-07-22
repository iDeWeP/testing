import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
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
  const paddingType = getSpacing(padding, 'bottom');
  const marginType = getSpacing(margin, 'bottom');
  const borderType = getBorder(variant, border, 'bottom');

  return mergeClasses(
    sharedStyles.display.flex,
    systemStyles.padding.default.x[paddingType.x],
    systemStyles.padding.default.b[paddingType.b],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.b[marginType.b],
    systemStyles.border.x[borderType.x],
    systemStyles.border.b[borderType.b],
    systemStyles.radius.b[radius],
    sharedStyles.direction[orientation],
    className
  );
};
