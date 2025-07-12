import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { getReversedColor } from '../../utils/merge-class-name/color';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
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
    color,
    ...restProps
  } = mergeProps(unstyledButtonConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledButton', className, {
    theme,
    checked,
    loading,
    disabled,
    variant,
    color,
    effect
  });

  const hasRipple = ripple !== 'none' && !loading && !disabled;

  const spinnerNode = (
    <UnstyledSpinner
      disabled={disabled}
      spin
      value={75}
      variant="text"
      float={loading === true}
      size={size}
      thickness={4}
      scale="text"
      margin="unset"
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

  return (
    <UnstyledContainer
      disabled={disabled || !!loading}
      type="button"
      variant={variant}
      size={size}
      color={color}
      className={mergedClassName}
      {...setAria('button', { element: Component })}
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
          scale="inner"
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledContainer>
  );
};
