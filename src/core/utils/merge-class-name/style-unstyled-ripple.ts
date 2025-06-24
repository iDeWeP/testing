import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getValidityColor } from './color';
import { getRippleState } from './get-ripple-state';
import { mergeClasses } from './merge-classes';
import { getVariant } from './variants';

export const styleUnstyledRipple = (
  className: string,
  {
    valid = false,
    invalid = false,
    stateful = false,
    variant = 'none',
    color = 'primary'
  }: Classes
) =>
  mergeClasses(
    unstyledRippleConfig.styles.root.default,
    stateful && unstyledRippleConfig.styles.root.stateful,
    unstyledRippleConfig.styles.root.color[
      getValidityColor(color, valid, invalid)
    ][getRippleState(stateful)][getVariant(variant).textVariant],
    className
  );
