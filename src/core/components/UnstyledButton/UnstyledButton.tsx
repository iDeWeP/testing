import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setButtonStyle } from '../../utils/set-button-style/set-button-style';
import { setLoaderSize } from '../../utils/set-loader-size/set-loader-size';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import { UnstyledLoader } from '../UnstyledLoader/UnstyledLoader';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledButtonProps } from './UnstyledButton.types';
import { unstyledButtonConfig } from './unstyledButtonConfig';

export const UnstyledButton = <E extends ElementType>(
  props: UnstyledButtonProps<E>
) => {
  const {
    as: Component,
    checked,
    loading = false,
    disabled = false,
    effect,
    className,
    componentsProps,
    ripple,
    leftDecorator,
    rightDecorator,
    children,
    variant,
    size,
    color,
    ...restProps
  } = mergeProps(unstyledButtonConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('button', className, {
    theme,
    checked,
    loading,
    disabled,
    variant,
    color,
    effect
  });

  const styles = setButtonStyle(variant, color, checked);

  const spinnerNode = (
    <UnstyledLoader
      checked={checked}
      disabled={disabled}
      spin
      value={75}
      variant={variant}
      float={loading === true}
      size={setLoaderSize(size)}
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
      componentsProps={{
        bar: componentsProps.bar,
        outerBorder: componentsProps.outerBorder,
        innerBorder: componentsProps.innerBorder
      }}
      {...componentsProps.spinner}
    />
  );

  const buttonProps = Component === 'button' && {
    disabled: disabled || !!loading,
    type: 'button'
  };
  const leftSpinner = loading && loading !== 'right' && spinnerNode;
  const rightSpinner = loading === 'right' && spinnerNode;
  const hasRipple = ripple !== 'none' && !loading && !disabled;

  return (
    <UnstyledContainer
      as={Component}
      {...buttonProps}
      variant={styles.variant}
      size={size}
      color={styles.color}
      ring="unset"
      className={mergedClassName}
      {...setAria('button', {
        element: Component,
        isDisabled: disabled || !!loading
      })}
      {...restProps}
    >
      {leftSpinner}
      {leftDecorator}
      {children}
      {rightDecorator}
      {rightSpinner}
      {hasRipple && (
        <UnstyledRipple
          stateful={checked !== undefined}
          variant={variant}
          scale="inner"
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledContainer>
  );
};
