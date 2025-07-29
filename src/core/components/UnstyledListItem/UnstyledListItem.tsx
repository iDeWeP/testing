import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { isAutoBordered } from '../../utils/is-auto-bordered/is-auto-bordered';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setCheckableStyle } from '../../utils/set-checkale-style/set-checkable-style';
import { setProps } from '../../utils/set-props/set-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
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
    variant,
    orientation,
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

  const isClickable = checked !== undefined;
  const { autoVariant, autoColor, defaultVariant, defaultColor } =
    setCheckableStyle(variant, color, checked, 'text');

  const mergedClassName = mergeClassName('listItem', className, {
    theme,
    checked,
    disabled,
    clickable: isClickable,
    variant: autoVariant,
    orientation,
    color: autoColor,
    effect
  });

  const autoBorder = isAutoBordered(autoVariant, border, checked)
    ? 'set'
    : border;
  const hasRipple = ripple !== 'none' && !disabled;

  return (
    <UnstyledBox
      as={Component}
      {...setProps('button', {
        element: Component,
        disabled
      })}
      variant="solid"
      border={autoBorder}
      color="unset"
      ring={isClickable ? 'unset' : ring}
      gx="unset"
      gy="unset"
      className={mergedClassName}
      {...setAria('button', {
        element: Component,
        disabled,
        clickable: isClickable
      })}
      {...restProps}
    >
      {children}
      {hasRipple && (
        <UnstyledRipple
          stateful={isClickable}
          variant={defaultVariant}
          scale="default"
          color={defaultColor}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledBox>
  );
};
