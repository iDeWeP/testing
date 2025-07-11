import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledContainerProps } from './UnstyledContainer.types';
import { unstyledContainerConfig } from './unstyledContainerConfig';

export const UnstyledContainer = <E extends ElementType>(
  props: UnstyledContainerProps<E>
) => {
  const {
    as: Component,
    variant,
    size,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    color,
    shadow,
    gap,
    className,
    ...restProps
  } = mergeProps(unstyledContainerConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledContainer', className, {
    theme,
    variant,
    size,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    color,
    shadow,
    gap
  });

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
