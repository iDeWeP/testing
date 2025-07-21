import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getInputColor } from './get-input-color';
import { getInputRadius } from './get-input-radius';
import { getSpacingType } from './get-spacing-type';
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
    sidePlacement = 'left',
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
) => {
  const spacingType = getSpacingType(decorated);
  const radiuses = getInputRadius(
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
    unstyledInputConfig.styles.decorator.spacing[sidePlacement][spacingType],
    inputVariant === 'outlined' &&
      unstyledInputConfig.styles.decorator.outlined[sidePlacement],
    unstyledInputConfig.styles.shared.variant.default[inputVariant],
    unstyledInputConfig.styles.shared.variant[inputType][inputVariant],
    systemStyles.radius.l[radiuses.autoL],
    systemStyles.radius.r[radiuses.autoR],
    systemStyles.radius.tl[radiuses.autoTl],
    systemStyles.radius.tr[radiuses.autoTr],
    systemStyles.radius.l[radiuses.l],
    systemStyles.radius.r[radiuses.r],
    systemStyles.radius.tl[radiuses.tl],
    systemStyles.radius.tr[radiuses.tr],
    systemStyles.radius.bl[radiuses.bl],
    systemStyles.radius.br[radiuses.br],
    systemStyles.color.normal.bg[theme][bgColor],
    systemStyles.gap.all[gap],
    className
  );
};
