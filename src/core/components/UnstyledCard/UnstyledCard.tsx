import type { ElementType, ReactNode } from 'react';
import { useHandlers } from '../../hooks/use-handlers/use-handlers';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
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
    effect,
    className,
    onClick,
    onKeyDown,
    componentsProps,
    ripple,
    children,
    variant,
    color,
    ring,
    ...restProps
  } = mergeProps(unstyledCardConfig.props, props);

  const theme = useTheme();

  const handlers = useHandlers(Component, onClick, onKeyDown);

  const mergedClassName = mergeClassName('card', className, {
    theme,
    disabled,
    clickable,
    variant,
    color,
    effect
  });

  const hasRipple = ripple !== 'none' && clickable && !disabled;

  return (
    <UnstyledPaper
      as={Component}
      {...setProps('button', {
        element: Component,
        disabled
      })}
      variant="solid"
      color="unset"
      ring={clickable ? 'unset' : ring}
      className={mergedClassName}
      {...setAria('button', {
        element: Component,
        disabled,
        clickable
      })}
      {...handlers}
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
    </UnstyledPaper>
  );
};
