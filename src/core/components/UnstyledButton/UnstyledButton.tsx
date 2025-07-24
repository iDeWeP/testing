import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { getFontSize } from '../../utils/merge-class-name/get-font-size';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import { UnstyledLoader } from '../UnstyledLoader/UnstyledLoader';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledButtonProps } from './UnstyledButton.types';
import { unstyledButtonConfig } from './unstyledButtonConfig';

export const UnstyledButton = <E extends ElementType>(
  props: UnstyledButtonProps<E>
): ReactNode => {
  const {
    as: Component,
    loading = false,
    disabled = false,
    effect,
    className,
    componentsProps,
    ripple,
    startDecorator,
    endDecorator,
    children,
    variant,
    size,
    color,
    ...restProps
  } = mergeProps(unstyledButtonConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('button', className, {
    theme,
    loading,
    disabled,
    variant,
    color,
    effect
  });

  const {
    loader: loaderProps,
    ripple: rippleProps,
    ...restComponentsProps
  } = componentsProps;

  const loaderNode = (
    <UnstyledLoader
      disabled={disabled}
      spin
      value={75}
      variant={variant}
      float={loading === true}
      size={getFontSize(size)}
      thickness={4}
      margin="unset"
      m="unset"
      mx="unset"
      my="unset"
      mt="unset"
      mb="unset"
      ml="unset"
      mr="unset"
      border="unset"
      color={color}
      ring="unset"
      componentsProps={restComponentsProps}
      {...loaderProps}
    />
  );

  const buttonProps = {
    element: Component,
    disabled: disabled || !!loading
  };
  const leftLoader = loading && loading !== 'right' && loaderNode;
  const rightLoader = loading === 'right' && loaderNode;
  const hasRipple = ripple !== 'none' && !loading && !disabled;

  return (
    <UnstyledContainer
      as={Component}
      {...setProps('button', buttonProps)}
      variant={variant}
      size={size}
      color={color}
      ring="unset"
      className={mergedClassName}
      {...setAria('button', buttonProps)}
      {...restProps}
    >
      {leftLoader}
      {startDecorator}
      {children}
      {endDecorator}
      {rightLoader}
      {hasRipple && (
        <UnstyledRipple
          variant={variant}
          scale="default"
          color={color}
          effect={ripple}
          {...rippleProps}
        />
      )}
    </UnstyledContainer>
  );
};
