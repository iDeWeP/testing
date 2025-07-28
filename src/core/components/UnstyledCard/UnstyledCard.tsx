import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledCardProps } from './UnstyledCard.types';
import { unstyledCardConfig } from './unstyledCardConfig';

export const UnstyledCard = <E extends ElementType>(
  props: UnstyledCardProps<E>
): ReactNode => {
  const {
    as: Component,
    disabled = false,
    clickable = false,
    orientation,
    effect,
    className,
    componentsProps,
    ripple,
    children,
    variant,
    color,
    ring,
    ...restProps
  } = mergeProps(unstyledCardConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('card', className, {
    theme,
    disabled,
    clickable,
    variant,
    orientation,
    color,
    effect
  });

  const hasRipple = ripple !== 'none' && !disabled;

  return (
    <UnstyledBox
      as={Component}
      {...setProps('button', {
        element: Component,
        disabled
      })}
      variant={variant}
      color={color}
      ring={clickable ? 'unset' : ring}
      gx="unset"
      gy="unset"
      className={mergedClassName}
      {...setAria('button', {
        element: Component,
        disabled,
        clickable
      })}
      {...restProps}
    >
      {children}
      {hasRipple && (
        <UnstyledRipple
          variant={variant}
          scale="default"
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledBox>
  );
};
