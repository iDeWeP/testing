import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getInputColor } from './get-input-color';
import { getInputRadius } from './get-input-radius';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleInputDecorator = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    inputVariant = 'default',
    sidePlacement = 'start',
    radius = 'unset',
    r = 'unset',
    rt = 'unset',
    rb = 'unset',
    rl = 'unset',
    rr = 'unset',
    rtl = 'unset',
    rtr = 'unset',
    rbl = 'unset',
    rbr = 'unset',
    color = 'unset',
    gap = 'unset',
    decorated = false
  }: Classes
): ClassName => {
  const autoVariant = getInputVariant(inputVariant);
  const autoSize = decorated ? 'decorated' : 'default';
  const autoRadius = getInputRadius(
    inputVariant,
    sidePlacement,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr
  );
  const autoColor = getInputColor(
    valid,
    invalid,
    disabled,
    inputVariant,
    color
  );

  return mergeClasses(
    sharedStyle.display['inline-flex'],
    unstyledInputConfig.styles.decorator.padding[sidePlacement][autoVariant][
      autoSize
    ],
    unstyledInputConfig.styles.shared.variant.default[autoVariant],
    systemStyle.radius.l[autoRadius.autoL],
    systemStyle.radius.r[autoRadius.autoR],
    systemStyle.radius.tl[autoRadius.autoTl],
    systemStyle.radius.tr[autoRadius.autoTr],
    systemStyle.radius.l[autoRadius.l],
    systemStyle.radius.r[autoRadius.r],
    systemStyle.radius.tl[autoRadius.tl],
    systemStyle.radius.tr[autoRadius.tr],
    systemStyle.radius.bl[autoRadius.bl],
    systemStyle.radius.br[autoRadius.br],
    systemStyle.color.default.bg[theme][autoColor],
    decorated &&
      unstyledInputConfig.styles.shared.variant[inputType][autoVariant],
    decorated && systemStyle.gap.all[gap],
    className
  );
};
