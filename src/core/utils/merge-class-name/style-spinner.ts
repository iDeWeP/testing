import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleSpinner = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    spin = true,
    size = 'md',
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    ring = 'unset'
  }: Classes
) => {
  const margins = getSpacing(margin);
  const hasRing = ring !== 'unset';
  const isSpinning = spin && !disabled;

  return mergeClasses(
    sharedStyles.spinner,
    systemStyles.size.default.square[size],
    systemStyles.margin.all[margins.all],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    hasRing && systemStyles.color.default.ring[theme][ring],
    hasRing && sharedStyles.ring.default,
    isSpinning && sharedStyles.animation.spin,
    !isSpinning && sharedStyles.rotate['-90'],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
