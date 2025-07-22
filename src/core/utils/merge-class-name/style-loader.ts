import { unstyledLoaderConfig } from '../../components/UnstyledLoader/unstyledLoaderConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
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
): ClassName => {
  const isCheckable = checked !== undefined && !disabled;
  const marginType = getSpacing(margin);
  const defaultColorType = getLoaderColor(variant, color, { disabled });
  const uncheckedColorType = getLoaderColor(
    variant,
    color,
    { disabled },
    false
  );
  const checkedColorType = getLoaderColor(variant, color, { disabled }, true);
  const strokeColor = getStateColor(
    defaultColorType,
    uncheckedColorType,
    checkedColorType,
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
    systemStyles.margin.all[marginType.all],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.y[marginType.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.color.default.stroke[theme][strokeColor],
    isCheckable &&
      unstyledLoaderConfig.styles.root.color[theme][checkedColorType],
    hasRing && systemStyles.color.default.ring[theme][ring],
    hasRing && sharedStyles.ring.default,
    isSpinning && sharedStyles.animation.spin,
    !isSpinning && sharedStyles.rotate['-90'],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
