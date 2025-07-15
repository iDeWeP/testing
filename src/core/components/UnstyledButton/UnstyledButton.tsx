import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { getReversedColor } from '../../utils/merge-class-name/color';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setSpinnerSize } from '../../utils/merge-class-name/spacing';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setButtonStyle } from '../../utils/set-button-style/set-button-style';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
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
    border,
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

  const spinnerNode = (
    <UnstyledSpinner
      disabled={disabled}
      spin
      value={75}
      variant="text"
      float={loading === true}
      size={setSpinnerSize(size)}
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
      color={getReversedColor(color)}
      componentsProps={{
        bar: componentsProps.bar,
        trail: componentsProps.trail,
        outerBorder: componentsProps.outerBorder,
        innerBorder: componentsProps.innerBorder
      }}
      {...componentsProps.spinner}
    />
  );

  const leftSpinner = loading && loading !== 'right' && spinnerNode;
  const rightSpinner = loading === 'right' && spinnerNode;
  const hasRipple = ripple !== 'none' && !loading && !disabled;
  const styles = setButtonStyle(variant, border, color, checked);

  return (
    <UnstyledContainer
      as={Component}
      disabled={disabled || !!loading}
      type="button"
      variant={styles.variant}
      size={size}
      border={styles.border}
      color={styles.color}
      className={mergedClassName}
      {...setAria('button', { element: Component })}
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
