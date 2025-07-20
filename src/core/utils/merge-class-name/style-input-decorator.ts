import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getClass } from './get-class';
import { getInputColor } from './get-input-color';
import { getInputRadius } from './get-radius';
import { getSpacingType } from './get-spacing-type';
import { mergeClasses } from './merge-classes';

export const styleInputDecorator = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
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
  const isOutlined = inputVariant === 'outlined';
  const isLeft = sidePlacement === 'left';
  const radiuses = getInputRadius(inputVariant, sidePlacement, radius);

  return mergeClasses(
    sharedStyles.display['inline-flex'],
    unstyledInputConfig.styles.decorator.spacing[sidePlacement][
      getSpacingType(decorated)
    ],
    isOutlined && unstyledInputConfig.styles.decorator.outlined[sidePlacement],
    unstyledInputConfig.styles.generic.variant.default[inputVariant],
    unstyledInputConfig.styles.generic.variant[inputType][inputVariant],
    systemStyles.radius.l[radiuses.l],
    systemStyles.radius.r[radiuses.r],
    systemStyles.radius.tl[radiuses.tl],
    systemStyles.radius.tr[radiuses.tr],
    systemStyles.radius.l[getClass(isLeft, r)],
    systemStyles.radius.r[getClass(!isLeft, r)],
    systemStyles.radius.tl[getClass(isLeft, rt)],
    systemStyles.radius.tr[getClass(!isLeft, rt)],
    systemStyles.radius.bl[getClass(isLeft, rb)],
    systemStyles.radius.br[getClass(!isLeft, rb)],
    systemStyles.radius.l[getClass(isLeft, rl)],
    systemStyles.radius.r[getClass(!isLeft, rr)],
    systemStyles.radius.tl[getClass(isLeft, rtl)],
    systemStyles.radius.tr[getClass(!isLeft, rtr)],
    systemStyles.radius.bl[getClass(isLeft, rbl)],
    systemStyles.radius.br[getClass(!isLeft, rbr)],
    systemStyles.color.normal.bg[theme][
      getInputColor(inputVariant, color, disabled)
    ],
    systemStyles.gap.all[gap],
    className
  );
};
