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
  const uncheckedColor = getColor(
    variant,
    color,
    { valid, invalid },
    false
  ).text;
  const defaultColor = getColor(variant, color, { valid, invalid }).text;
  const autoColor = stateful ? uncheckedColor : defaultColor;

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    unstyledRippleConfig.styles.root.color[rippleScale].stateless[theme][
      autoColor
    ],
    stateful &&
      unstyledRippleConfig.styles.root.color[rippleScale].stateful[theme][
        defaultColor
      ],
    className
  );
};
