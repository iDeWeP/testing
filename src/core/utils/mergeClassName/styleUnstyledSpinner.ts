import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './getColor';
import { getSpinnerVariant } from './getSpinnerVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledSpinner = (
  className: string,
  {
    spin = true,
    disabled = false,
    float = false,
    variant = 'none',
    size = 'md',
    defaultScale = 'normal',
    color = 'neutral'
  }: Classes
) => {
  const animation = !spin || disabled ? 'rotate' : 'spin';

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && generic.styles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[defaultScale][size],
    generic.styles.size[defaultScale][size].square,
    generic.styles.color.stroke[getColor(disabled, color)][
      getSpinnerVariant(variant)
    ],
    unstyledSpinnerConfig.styles.root[animation],
    className
  );
};
