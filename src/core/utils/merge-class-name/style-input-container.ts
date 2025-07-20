import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
    inputVariant = 'default',
    inputSize = 'md',
    resize = false,
    width = 'normal',
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
  const size = resize ? 'full' : inputSize;
  const margins = getSpacing(margin);
  const normalColor = getColor(
    inputVariant === 'light' ? 'light' : 'text',
    color,
    { disabled, valid, invalid },
    false
  ).text;
  const onColor = getColor(
    inputVariant === 'light' ? 'light' : 'text',
    color,
    { disabled, valid, invalid },
    true
  ).text;

  return mergeClasses(
    on && sharedStyles.state.on,
    unstyledInputConfig.styles.container.default,
    unstyledInputConfig.styles.container.size[inputType][size],
    sharedStyles.width[width],
    systemStyles.margin.all[margins.all],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.color.normal.text[theme][normalColor],
    systemStyles.color.normal.fill[theme][normalColor],
    systemStyles.color.on.text[theme][onColor],
    systemStyles.color.on.fill[theme][onColor],
    disabled && sharedStyles.focusable.disabled,
    className
  );
};
