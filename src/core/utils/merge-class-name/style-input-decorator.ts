import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getInputColor } from './color';
import { mergeClasses } from './merge-classes';
import { getInputRadius, getRadius } from './radius';
import { getSpacingType } from './spacing';

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
    gap = 'unset',
    decorated = false
  }: Classes
) => {
  const isOutlined = inputVariant === 'outlined';
  const radiuses = getInputRadius(inputVariant, sidePlacement, radius);
  const isLeft = sidePlacement === 'left';

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
    systemStyles.radius.l[getRadius(isLeft, r)],
    systemStyles.radius.r[getRadius(!isLeft, r)],
    systemStyles.radius.tl[getRadius(isLeft, rt)],
    systemStyles.radius.tr[getRadius(!isLeft, rt)],
    systemStyles.radius.bl[getRadius(isLeft, rb)],
    systemStyles.radius.br[getRadius(!isLeft, rb)],
    systemStyles.radius.l[getRadius(isLeft, rl)],
    systemStyles.radius.r[getRadius(!isLeft, rr)],
    systemStyles.radius.tl[getRadius(isLeft, rtl)],
    systemStyles.radius.tr[getRadius(!isLeft, rtr)],
    systemStyles.radius.bl[getRadius(isLeft, rbl)],
    systemStyles.radius.br[getRadius(!isLeft, rbr)],
    systemStyles.color.bg[theme][getInputColor(inputVariant, disabled)],
    systemStyles.gap.all[gap],
    className
  );
};
