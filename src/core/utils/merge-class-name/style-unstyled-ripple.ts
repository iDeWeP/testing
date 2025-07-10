import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getRippleColor, getDefaultColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledRipple = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    stateful = false,
    variant = 'solid',
    ripplePlacement = 'normal',
    color = 'unset'
  }: Classes
) => {
  const textColor = getRippleColor(variant, color, valid, invalid);

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    stateful && unstyledRippleConfig.styles.root.stateful,
    !stateful &&
      unstyledRippleConfig.styles.root.color[ripplePlacement].stateless[theme][
        textColor
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[ripplePlacement].stateless[theme][
        getRippleColor(variant, getDefaultColor(color), valid, invalid)
      ],
    stateful &&
      unstyledRippleConfig.styles.root.color[ripplePlacement].stateful[theme][
        textColor
      ],
    className
  );
};
