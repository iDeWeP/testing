import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getDefaultSize } from './get-default-size';
import { getSpacing } from './get-spacing';
import { isSpacingInner } from './is-spacing-inner';
import { mergeClasses } from './merge-classes';

export const styleSpinner = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    spin = true,
    float = false,
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
  const sizeType = isSpacingInner(size) ? 'text' : 'normal';
  const margins = getSpacing(margin);
  const hasRing = ring !== 'unset';
  const isSpinning = spin && !disabled;

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && sharedStyles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[size],
    systemStyles.size[sizeType].square[getDefaultSize(size)],
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
    hasRing && systemStyles.color.normal.ring[theme][ring],
    hasRing && sharedStyles.ring.normal,
    isSpinning && unstyledSpinnerConfig.styles.root.spin,
    !isSpinning && sharedStyles.rotate['-90'],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
