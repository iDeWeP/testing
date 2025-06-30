import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getValidityColor } from './color';
import { mergeClasses } from './merge-classes';
import { getRippleState } from './state';
import { getVariant } from './variant';

export const styleUnstyledRipple = (
  className: string,
  {
    valid = false,
    invalid = false,
    stateful = false,
    variant = 'none',
    color = 'neutral'
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
