import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getRippleState } from './get-ripple-state';
import { getValidityColor } from './get-validity-color';
import { getVariant } from './get-variant';
import { mergeClasses } from './merge-classes';

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
      getValidityColor(valid, invalid, color)
    ][getRippleState(stateful)][getVariant(variant)[1]],
    className
  );
