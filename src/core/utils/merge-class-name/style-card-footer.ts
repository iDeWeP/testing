import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { mergeClasses } from './merge-classes';
import { getSpacing } from './spacing';

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
  const paddings = getSpacing(padding, true);
  const margins = getSpacing(margin, true);
  const defaultBorder = getBorder(variant, border);

  return mergeClasses(
    sharedStyles.display.flex,
    systemStyles.padding.default.x[paddings.x],
    systemStyles.padding.default.b[paddings.y],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.b[margins.y],
    systemStyles.border.x[defaultBorder],
    systemStyles.border.b[defaultBorder],
    systemStyles.radius.b[radius],
    sharedStyles.direction[orientation],
    className
  );
};
