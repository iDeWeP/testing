import { unstyledLoaderConfig } from '../../components/UnstyledLoader/unstyledLoaderConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getLoaderColor } from './get-loader-color';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleLoader = (
  className: string,
  {
    theme = 'light',
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
  const autoMargin = getSpacing(margin);
  const autoColor = getLoaderColor(variant, color, { disabled });
  const hasRing = ring !== 'unset';
  const isSpinning = spin && !disabled;

  return mergeClasses(
    sharedStyle.spinner,
    float && sharedStyle.position.absolute,
    float && unstyledLoaderConfig.styles.root.float[size],
    systemStyle.size.text.square[size],
    systemStyle.margin.all[autoMargin.all],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.y[autoMargin.y],
    systemStyle.margin.all[m],
    systemStyle.margin.x[mx],
    systemStyle.margin.y[my],
    systemStyle.margin.t[mt],
    systemStyle.margin.b[mb],
    systemStyle.margin.l[ml],
    systemStyle.margin.r[mr],
    systemStyle.color.default.stroke[theme][autoColor],
    hasRing && systemStyle.color.default.ring[theme][ring],
    hasRing && sharedStyle.ring.default,
    isSpinning && sharedStyle.animation.spin,
    !isSpinning && sharedStyle.rotate['-90'],
    disabled && sharedStyle.cursor.disabled,
    className
  );
};
