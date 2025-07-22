import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getArrowColor } from './get-arrow-color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledPopperArrow = (
  className: string,
  {
    theme = 'light',
    variant = 'solid',
    defaultPlacement = 'bottom',
    border = 'unset',
    bx = 'unset',
    by = 'unset',
    bt = 'unset',
    bb = 'unset',
    bl = 'unset',
    br = 'unset',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    sharedStyles.position.absolute,
    systemStyles.color.normal.fill[theme][
      getArrowColor(
        variant,
        defaultPlacement,
        border,
        bx,
        by,
        bt,
        bb,
        bl,
        br,
        color
      )
    ],
    className
  );
