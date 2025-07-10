import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getInputColor, getDefaultColor } from './color';
import { mergeClasses } from './merge-classes';
import { getInputRadius } from './radius';
import { getInputSpacing } from './spacing';

export const styleUnstyledInputDecorator = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    disabled = false,
    inputVariant = 'default',
    sidePlacement = 'left',
    radius = 'unset',
    rt = 'unset',
    rb = 'unset',
    rl = 'unset',
    rr = 'unset',
    rtl = 'unset',
    rtr = 'unset',
    rbl = 'unset',
    rbr = 'unset',
    color = 'unset',
    decorated = false
  }: Classes
) => {
  const isOutlined = inputVariant === 'outlined';
  const { l, r, tl, tr, bl, br } = getInputRadius(
    inputVariant,
    sidePlacement,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr
  );

  return mergeClasses(
    unstyledInputConfig.styles.decorator.default,
    unstyledInputConfig.styles.decorator.spacing[sidePlacement][
      getInputSpacing(decorated)
    ],
    isOutlined && unstyledInputConfig.styles.decorator.outlined[sidePlacement],
    unstyledInputConfig.styles.generic.variant.default[inputVariant],
    unstyledInputConfig.styles.generic.variant[inputType][inputVariant],
    systemStyles.radius.l[l],
    systemStyles.radius.r[r],
    systemStyles.radius.tl[tl],
    systemStyles.radius.tr[tr],
    systemStyles.radius.bl[bl],
    systemStyles.radius.br[br],
    systemStyles.color.bg[theme][
      getInputColor(inputVariant, getDefaultColor(color), disabled).bgColor
    ],
    className
  );
};
