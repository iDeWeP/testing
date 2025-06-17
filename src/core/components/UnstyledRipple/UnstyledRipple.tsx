import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import type { UnstyledRippleProps } from './UnstyledRipple.types';
import { unstyledRippleConfig } from './unstyledRippleConfig';

export const UnstyledRipple = (props: UnstyledRippleProps) => {
  const {
    stateful: isStateful,
    valid: isValid,
    invalid: isInvalid,
    variant,
    color,
    effect: rippleEffect,
    className,
    ...restProps
  } = mergeProps(unstyledRippleConfig.props, props);

  const mergedClassName = mergeClassName('unstyledRipple', className, {
    isStateful,
    isValid,
    isInvalid,
    variant,
    color,
    rippleEffect
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
