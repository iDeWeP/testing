import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setButtonStyle } from '../../utils/set-button-style/set-button-style';
import { setLoaderSize } from '../../utils/set-loader-size/set-loader-size';
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
    checked,
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
    checked,
    loading,
    disabled,
    variant,
    color,
    effect
  });

  const styles = setButtonStyle(variant, color, checked);

  const loaderNode = (
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
      {...componentsProps.loader}
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
      variant={styles.variant}
      size={size}
      color={styles.color}
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
          stateful={checked !== undefined}
          variant={variant}
          scale="default"
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledContainer>
  );
};
