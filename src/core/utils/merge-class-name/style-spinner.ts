import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getScale } from './scale';
import { getSpinnerTransition } from './transition';

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
  const { defaultScale, sizeScale } = getScale(size, 'square');

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && sharedStyles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[defaultScale][sizeScale],
    systemStyles.size[defaultScale].square[sizeScale],
    systemStyles.margin.default[margin],
    systemStyles.margin.all[m],
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
};
