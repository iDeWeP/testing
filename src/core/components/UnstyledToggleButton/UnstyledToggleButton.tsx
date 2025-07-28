import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setCheckableStyle } from '../../utils/set-checkale-style/set-checkable-style';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledToggleButtonProps } from './UnstyledToggleButton.types';
import { unstyledToggleButtonConfig } from './unstyledToggleButtonConfig';

export const UnstyledToggleButton = <E extends ElementType>(
  props: UnstyledToggleButtonProps<E>
): ReactNode => {
  const {
    as: Component,
    checked = false,
    disabled = false,
    variant,
    effect,
    className,
    componentsProps,
    ripple,
    children,
    color,
    ...restProps
  } = mergeProps(unstyledToggleButtonConfig.props, props);

  const theme = useTheme();

  const { autoVariant, autoColor, defaultVariant, defaultColor } =
    setCheckableStyle(variant, color, checked);

  const mergedClassName = mergeClassName('toggleButton', className, {
    theme,
    checked,
    disabled,
    variant: autoVariant,
    color: autoColor,
    effect
  });

  const buttonProps = {
    element: Component,
    disabled
  };
  const hasRipple = ripple !== 'none' && !disabled;

  return (
    <UnstyledContainer
      as={Component}
      {...setProps('button', buttonProps)}
      variant={autoVariant}
      color={autoColor}
      ring="unset"
      className={mergedClassName}
      {...setAria('button', buttonProps)}
      {...restProps}
    >
      {children}
      {hasRipple && (
        <UnstyledRipple
          stateful
          variant={defaultVariant}
          scale="default"
          color={defaultColor}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledContainer>
  );
};
