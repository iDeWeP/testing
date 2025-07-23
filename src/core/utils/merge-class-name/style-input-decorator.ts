import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getInputColor } from './get-input-color';
import { getInputRadius } from './get-input-radius';
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
  const variantType = inputVariant === 'outlined' ? 'outlined' : 'default';
  const sizeType = decorated ? 'decorated' : 'default';
  const radiusType = getInputRadius(
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
  const bgColor = getInputColor(inputVariant, color, disabled, valid, invalid);

  return mergeClasses(
    sharedStyles.display['inline-flex'],
    unstyledInputConfig.styles.decorator.padding[sidePlacement][variantType][
      sizeType
    ],
    unstyledInputConfig.styles.shared.variant.default[variantType],
    unstyledInputConfig.styles.shared.variant[inputType][variantType],
    systemStyles.radius.l[radiusType.autoL],
    systemStyles.radius.r[radiusType.autoR],
    systemStyles.radius.tl[radiusType.autoTl],
    systemStyles.radius.tr[radiusType.autoTr],
    systemStyles.radius.l[radiusType.l],
    systemStyles.radius.r[radiusType.r],
    systemStyles.radius.tl[radiusType.tl],
    systemStyles.radius.tr[radiusType.tr],
    systemStyles.radius.bl[radiusType.bl],
    systemStyles.radius.br[radiusType.br],
    systemStyles.color.default.bg[theme][bgColor],
    systemStyles.gap.all[gap],
    className
  );
};
