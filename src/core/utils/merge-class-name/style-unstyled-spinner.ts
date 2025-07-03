import { unstyledSpinnerConfig } from '../../components/UnstyledSpinner/unstyledSpinnerConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getSpinnerTransition } from './transition';
import { getVariant } from './variant';

export const styleUnstyledSpinner = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    spin = true,
    variant = 'none',
    float = false,
    defaultSize = 'md',
    sizeScale = 'normal',
    margin = 'none',
    color = 'neutral'
  }: Classes
) =>
  mergeClasses(
    unstyledSpinnerConfig.styles.root.default,
    float && generic.styles.position.absolute,
    float && unstyledSpinnerConfig.styles.root.float[sizeScale][defaultSize],
    generic.styles.size[sizeScale].square[defaultSize],
    generic.styles.margin[margin],
    generic.styles.color.stroke[theme][getColor(color, disabled)][
      getVariant(variant, disabled).textVariant
    ],
    unstyledSpinnerConfig.styles.root[getSpinnerTransition(spin, disabled)],
    disabled && generic.styles.focusable.disabled,
    className
  );
