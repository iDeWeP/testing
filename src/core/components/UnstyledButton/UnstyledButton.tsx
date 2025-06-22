import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { UnstyledButtonProps } from './UnstyledButton.types';
import { unstyledButtonConfig } from './unstyledButtonConfig';

export const UnstyledButton = <E extends ElementType = 'button'>(
  props: UnstyledButtonProps<E>
) => {
  const {
    as: Component,
    loading,
    disabled,
    variant,
    size,
    scale: buttonScale,
    margin,
    border: defaultBorder,
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

  const mergedClassName = mergeClassName('unstyledButton', className, {
    loading,
    disabled,
    variant,
    relative: !!loading || ripple !== 'none',
    size,
    buttonScale,
    margin,
    defaultBorder,
    radius,
    color,
    effect
  });

  const hasRipple = !loading && !disabled && ripple !== 'none';

  const spinnerNode = (
    <UnstyledSpinner
      spin
      disabled={disabled}
      value={75}
      variant="text"
      float={loading === true}
      size="xs"
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
          valid={false}
          invalid={false}
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
