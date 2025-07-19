import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getDefaultColor, getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleRipple = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    stateful = false,
    variant = 'solid',
    innerScale = 'normal',
    color = 'unset'
  }: Classes
) => {
  const defaultColors = getDefaultColor(variant, color, false, valid, invalid);
  const colors = getColor(variant, color, false, valid, invalid);

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    !stateful &&
      unstyledRippleConfig.styles.root.color[innerScale].stateless[theme][
        colors.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[innerScale].stateless[theme][
        defaultColors.text
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[innerScale].stateful[theme][
        colors.text
      ],
    className
  );
};
