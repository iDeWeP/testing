import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { mergeClasses } from './merge-classes';

export const styleRipple = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    stateful = false,
    variant = 'solid',
    rippleScale = 'default',
    color = 'unset'
  }: Classes
) => {
  const normalColors = getColor(variant, color, { valid, invalid }, false);
  const defaultColors = getColor(variant, color, { valid, invalid });

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    !stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateless[theme][
        defaultColors.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateless[theme][
        normalColors.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateful[theme][
        defaultColors.text
      ],
    className
  );
};
