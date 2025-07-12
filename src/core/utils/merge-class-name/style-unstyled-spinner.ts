import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getSpinnerTransition } from './transition';

export const styleUnstyledSpinner = (
  className: string,
  {
    disabled = false,
    spin = true,
    float = false,
    size = 'md',
    defaultScale = 'normal',
    margin = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset'
  }: Classes
) =>
  mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && sharedStyles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[defaultScale][size],
    systemStyles.size[defaultScale].square[size],
    systemStyles.margin.all[margin],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    unstyledSpinnerConfig.styles.root[getSpinnerTransition(spin, disabled)],
    disabled && sharedStyles.cursor.disabled,
    className
  );
