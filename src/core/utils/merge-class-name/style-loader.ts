import { unstyledLoaderConfig } from '../../components/UnstyledLoader/unstyledLoaderConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getLoaderColor } from './get-loader-color';
import { getSpacing } from './get-spacing';
import { getStateColor } from './get-state-color';
import { mergeClasses } from './merge-classes';

export const styleLoader = (
  className: string,
  {
    theme = 'light',
    checked,
    disabled = false,
    spin = true,
    variant = 'solid',
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
    color = 'unset',
    ring = 'unset'
  }: Classes
) => {
  const isCheckable = checked !== undefined && !disabled;
  const margins = getSpacing(margin);
  const defaultColor = getLoaderColor(variant, color, { disabled });
  const uncheckedColor = getLoaderColor(variant, color, { disabled }, false);
  const checkedColor = getLoaderColor(variant, color, { disabled }, true);
  const strokeColor = getStateColor(
    defaultColor,
    uncheckedColor,
    checkedColor,
    disabled,
    checked
  );
  const hasRing = ring !== 'unset';
  const isSpinning = spin && !disabled;

  return mergeClasses(
    sharedStyles.spinner,
    float && sharedStyles.position.absolute,
    float && unstyledLoaderConfig.styles.root.float[size],
    systemStyles.size.text.square[size],
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
    systemStyles.color.default.stroke[theme][strokeColor],
    isCheckable && unstyledLoaderConfig.styles.root.color[theme][checkedColor],
    hasRing && systemStyles.color.default.ring[theme][ring],
    hasRing && sharedStyles.ring.default,
    isSpinning && sharedStyles.animation.spin,
    !isSpinning && sharedStyles.rotate['-90'],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
