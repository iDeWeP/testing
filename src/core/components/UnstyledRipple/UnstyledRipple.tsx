import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledRippleProps } from './UnstyledRipple.types';
import { unstyledRippleConfig } from './unstyledRippleConfig';

export const UnstyledRipple = (props: UnstyledRippleProps) => {
  const {
    valid = false,
    invalid = false,
    stateful,
    variant,
    color,
    effect: rippleEffect,
    className,
    ...restProps
  } = mergeProps(unstyledRippleConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledRipple', className, {
    theme,
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
