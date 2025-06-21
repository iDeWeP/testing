import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getValidityColor } from './get-validity-color';
import { getVariant } from './get-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledRipple = (
  className: string,
  {
    stateful = false,
    valid = false,
    invalid = false,
    variant = 'none',
    color = 'primary'
  }: Classes
) => {
  const state = stateful ? 'stateful' : 'stateless';

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    unstyledRippleConfig.styles.root.color[
      getValidityColor(valid, invalid, color)
    ][state][getVariant(variant)[1]],
    className
  );
};
