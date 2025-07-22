import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes, ClassName } from '../../types';
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
): ClassName => {
  const defaultColorType = getColor(variant, color, { valid, invalid }, false);
  const colorType = getColor(variant, color, { valid, invalid });

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    !stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateless[theme][
        colorType.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateless[theme][
        defaultColorType.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateful[theme][
        colorType.text
      ],
    className
  );
};
