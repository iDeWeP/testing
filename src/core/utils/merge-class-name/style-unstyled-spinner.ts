import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getSpinnerTransition } from './transition';

export const styleUnstyledSpinner = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    spin = true,
    variant = 'text',
    float = false,
    defaultSize = 'md',
    scale = 'normal',
    margin = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && sharedStyles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[scale][defaultSize],
    systemStyles.size[scale].square[defaultSize],
    systemStyles.margin.all[margin],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.color.stroke[theme][
      getColor(variant, color, disabled).textColor
    ],
    unstyledSpinnerConfig.styles.root[getSpinnerTransition(spin, disabled)],
    disabled && sharedStyles.focusable.disabled,
    className
  );
