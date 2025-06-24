import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { getSpinnerAnimation } from './get-spinner-animation';
import { mergeClasses } from './merge-classes';
import { getVariant } from './variants';

export const styleUnstyledSpinner = (
  className: string,
  {
    spin = true,
    disabled = false,
    variant = 'none',
    float = false,
    size = 'md',
    defaultScale = 'normal',
    margin = 'none',
    color = 'neutral'
  }: Classes
) =>
  mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && generic.styles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[defaultScale][size],
    generic.styles.size[defaultScale].square[size],
    generic.styles.margin[margin],
    generic.styles.color.stroke[getColor(color, disabled)][
      getVariant(variant).textVariant
    ],
    unstyledSpinnerConfig.styles.root[getSpinnerAnimation(spin, disabled)],
    className
  );
