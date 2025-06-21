import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { getVariant } from './get-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledSpinner = (
  className: string,
  {
    spin = true,
    disabled = false,
    float = false,
    variant = 'none',
    size = 'md',
    defaultScale = 'normal',
    margin = 'none',
    color = 'neutral'
  }: Classes
) => {
  const animation = !spin || disabled ? 'rotate' : 'spin';

  return mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && generic.styles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[defaultScale][size],
    generic.styles.size[defaultScale][size].square,
    generic.styles.margin[margin],
    generic.styles.color.stroke[getColor(disabled, color)][
      getVariant(variant)[1]
    ],
    unstyledSpinnerConfig.styles.root[animation],
    className
  );
};
