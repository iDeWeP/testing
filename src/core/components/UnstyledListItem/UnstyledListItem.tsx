import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { isAutoBordered } from '../../utils/is-auto-bordered/is-auto-bordered';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setCheckableStyle } from '../../utils/set-checkale-style/set-checkable-style';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledListItemProps } from './UnstyledListItem.types';
import { unstyledListItemConfig } from './unstyledListItemConfig';

export const UnstyledListItem = <E extends ElementType>(
  props: UnstyledListItemProps<E>
): ReactNode => {
  const {
    as: Component,
    selected: checked,
    disabled = false,
    clickable = false,
    variant,
    effect,
    className,
    componentsProps,
    ripple,
    children,
    border,
    color,
    ring,
    ...restProps
  } = mergeProps(unstyledListItemConfig.props, props);

  const theme = useTheme();

  const { autoVariant, autoColor, defaultVariant, defaultColor } =
    setCheckableStyle(variant, color, checked, 'text');

  const mergedClassName = mergeClassName('listItem', className, {
    theme,
    checked,
    disabled,
    clickable,
    variant: autoVariant,
    color: autoColor,
    effect
  });

  const autoBorder = isAutoBordered(autoVariant, border, checked)
    ? 'set'
    : border;
  const hasRipple = ripple !== 'none' && !disabled;

  return (
    <UnstyledPaper
      as={Component}
      {...setProps('button', {
        element: Component,
        disabled
      })}
      variant="solid"
      border={autoBorder}
      color="unset"
      ring={clickable ? 'unset' : ring}
      className={mergedClassName}
      {...setAria('listItem', {
        element: Component,
        checked,
        disabled,
        clickable
      })}
      {...restProps}
    >
      {children}
      {hasRipple && (
        <UnstyledRipple
          stateful={checked !== undefined}
          variant={defaultVariant}
          scale="default"
          color={defaultColor}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledPaper>
  );
};
