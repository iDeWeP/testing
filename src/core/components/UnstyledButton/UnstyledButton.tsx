import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setVariant } from '../../utils/set-variant/set-variant';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { UnstyledButtonProps } from './UnstyledButton.types';
import { unstyledButtonConfig } from './unstyledButtonConfig';

export const UnstyledButton = <E extends ElementType = 'button'>(
  props: UnstyledButtonProps<E>
) => {
  const {
    as: Component,
    loading = false,
    disabled = false,
    variant,
    size,
    scale: buttonScale,
    margin,
    border,
    radius,
    color,
    effect,
    className,
    componentsProps,
    ripple,
    leftDecorator,
    rightDecorator,
    children,
    ...restProps
  } = mergeProps(unstyledButtonConfig.props, props);

  const theme = useTheme();

  const isRelative =
    loading !== 'left' && loading !== 'right' && !disabled && ripple !== 'none';

  const mergedClassName = mergeClassName('unstyledButton', className, {
    theme,
    loading,
    disabled,
    variant,
    relative: isRelative,
    size,
    buttonScale,
    margin,
    border,
    radius,
    color,
    effect
  });

  const hasRipple = ripple !== 'none' && !loading && !disabled;

  const spinnerNode = (
    <UnstyledSpinner
      disabled={disabled}
      spin
      value={75}
      variant={setVariant(variant)}
      float={loading === true}
      size={size}
      thickness={4}
      scale="text"
      margin="none"
      border={false}
      color={color}
      componentsProps={{
        bar: componentsProps.bar,
        trail: componentsProps.trail,
        outerBorder: componentsProps.outerBorder,
        innerBorder: componentsProps.innerBorder
      }}
      {...componentsProps.spinner}
    />
  );

  return (
    <Component
      disabled={disabled || !!loading}
      type="button"
      className={mergedClassName}
      {...restProps}
    >
      {loading && loading !== 'right' && spinnerNode}
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading === 'right' && spinnerNode}
      {hasRipple && (
        <UnstyledRipple
          stateful={false}
          variant={variant}
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </Component>
  );
};
