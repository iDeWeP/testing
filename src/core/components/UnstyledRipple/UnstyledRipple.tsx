import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { UnstyledRippleProps } from './UnstyledRipple.types';
import { unstyledRippleConfig } from './unstyledRippleConfig';

export const UnstyledRipple = (props: UnstyledRippleProps) => {
  const {
    valid,
    invalid,
    stateful,
    variant,
    color,
    effect: rippleEffect,
    className,
    ...restProps
  } = mergeProps(unstyledRippleConfig.props, props);

  const mergedClassName = mergeClassName('unstyledRipple', className, {
    valid,
    invalid,
    stateful,
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
