import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor, getDefaultColor } from './color';
import { mergeClasses } from './merge-classes';
import { getInputSize } from './spacing';

export const styleInputContainer = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    focused = false,
    shifted = false,
    valid = false,
    invalid = false,
    disabled = false,
    inputSize = 'md',
    resize = false,
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    color = 'unset'
  }: Classes
) => {
  const size = getInputSize(inputSize, resize);
  const textColor = getColor(
    'text',
    getDefaultColor(color),
    disabled,
    valid,
    invalid
  ).text;

  return mergeClasses(
    focused && unstyledInputConfig.styles.container.focused,
    shifted && unstyledInputConfig.styles.container.shifted,
    unstyledInputConfig.styles.container.default,
    unstyledInputConfig.styles.container.size[inputType][size],
    systemStyles.margin.x[margin],
    systemStyles.margin.y[margin],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.color.text[theme][textColor],
    systemStyles.color.fill[theme][textColor],
    unstyledInputConfig.styles.container.color[theme][
      getColor('text', color, disabled, valid, invalid).text
    ],
    disabled && sharedStyles.focusable.disabled,
    className
  );
};
