import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { getInputRadius } from './get-input-radius';
import { getInputSpacing } from './get-input-spacing';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputDecorator = (
  className: string,
  {
    disabled = false,
    inputVariant = 'default',
    sidePlacement = 'left',
    radius = 'none',
    decorated = false
  }: Classes
) => {
  const { variant, bgVariant } = getInputVariant(inputVariant, disabled);

  return mergeClasses(
    unstyledInputConfig.styles.decorator.default,
    unstyledInputConfig.styles.decorator.spacing[sidePlacement][
      getInputSpacing(decorated)
    ],
    variant === 'outlined' &&
      unstyledInputConfig.styles.decorator.outlined[sidePlacement],
    unstyledInputConfig.styles.generic.variant[variant],
    generic.styles.radius.lg[
      getInputRadius(inputVariant, sidePlacement, radius)
    ],
    generic.styles.color.bg[getColor(disabled, 'surface')][bgVariant],
    className
  );
};
