import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getSpinnerScale } from './scale';
import { getSpacing, getDefaultSize } from './spacing';

export const styleSpinner = (
  className: string,
  {
    disabled = false,
    spin = true,
    float = false,
    size = 'md',
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset'
  }: Classes
) => {
  const margins = getSpacing(margin);

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && sharedStyles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[size],
    systemStyles.size[getSpinnerScale(size)].square[getDefaultSize(size)],
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
    spin && unstyledSpinnerConfig.styles.root.spin,
    !spin && sharedStyles.rotate['-90'],
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
