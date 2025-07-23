import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
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
    inputVariant = 'default',
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
    color = 'unset'
  }: Classes
): ClassName => {
  const size = resize ? 'full' : inputSize;
  const marginType = getSpacing(margin);
  const textColor = getColor(
    inputVariant === 'light' ? 'light' : 'text',
    color,
    { valid, invalid, disabled },
    false
  ).text;
  const onTextColor = getColor(
    inputVariant === 'light' ? 'light' : 'text',
    color,
    { valid, invalid, disabled },
    true
  ).text;

  return mergeClasses(
    on && sharedStyles.state.on,
    unstyledInputConfig.styles.root.default,
    unstyledInputConfig.styles.root.size[inputType][size],
    sharedStyles.width[width],
    systemStyles.margin.all[marginType.all],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.y[marginType.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.color.default.text[theme][textColor],
    systemStyles.color.default.fill[theme][textColor],
    systemStyles.color.on.text[theme][onTextColor],
    systemStyles.color.on.fill[theme][onTextColor],
    disabled && sharedStyles.focusable.disabled,
    className
  );
};
