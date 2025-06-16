import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './getColor';
import { getSpinnerVariant } from './getSpinnerVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledSpinner = (
  className: string,
  {
    isSpinning = true,
    isDisabled = false,
    isFloating = false,
    variant = 'text',
    size = 'md',
    defaultScale = 'normal',
    color = 'primary'
  }: Classes
) => {
  const animation = !isSpinning || isDisabled ? 'rotate' : 'spin';

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    isFloating && generic.styles.position.absolute,
    isFloating && unstyledSpinnerConfig.styles.root.float[defaultScale][size],
    generic.styles.size[defaultScale][size].square,
    generic.styles.color.stroke[getColor(isDisabled, color)][
      getSpinnerVariant(variant)
    ],
    unstyledSpinnerConfig.styles.root[animation],
    className
  );
};
