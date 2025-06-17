import { unstyledRippleConfig } from '../../components/UnstyledRipple/unstyledRippleConfig';
import type { Classes } from '../../types';
import { getValidityColor } from './getValidityColor';
import { getVariant } from './getVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledRipple = (
  className: string,
  {
    isStateful = false,
    isValid = false,
    isInvalid = false,
    variant = 'none',
    color = 'primary'
  }: Classes
) => {
  const state = isStateful ? 'stateful' : 'stateless';

  return mergeClasses(
    unstyledRippleConfig.styles.root.default,
    unstyledRippleConfig.styles.root.color[
      getValidityColor(isValid, isInvalid, color)
    ][state][getVariant(variant)[1]],
    className
  );
};
