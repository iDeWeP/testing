import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleInputContainer = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    on = false,
    valid = false,
    invalid = false,
    disabled = false,
    inputSize = 'md',
    resize = false,
    width = 'default',
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
  const autoSize = resize ? 'full' : inputSize;
  const autoMargin = getSpacing(margin);
  const autoColor = getColor('text', color, {
    checked: false,
    valid,
    invalid,
    disabled
  }).text;
  const onAutoColor = getColor('text', color, {
    checked: true,
    valid,
    invalid,
    disabled
  }).text;
  const hasRing = ring !== 'unset';

  return mergeClasses(
    on && sharedStyle.state.on,
    unstyledInputConfig.styles.root.default,
    unstyledInputConfig.styles.root.size[inputType][autoSize],
    sharedStyle.width[width],
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
    systemStyle.color.default.text[theme][autoColor],
    systemStyle.color.default.fill[theme][autoColor],
    systemStyle.color.on.text[theme][onAutoColor],
    systemStyle.color.on.fill[theme][onAutoColor],
    hasRing && systemStyle.color.default.ring[theme][ring],
    hasRing && sharedStyle.ring.default,
    disabled && sharedStyle.focusable.disabled,
    className
  );
};
