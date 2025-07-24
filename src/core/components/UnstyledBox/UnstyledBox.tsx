import type { ElementType, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledBoxProps } from './UnstyledBox.types';
import { unstyledBoxConfig } from './unstyledBoxConfig';

export const UnstyledBox = <E extends ElementType>(
  props: UnstyledBoxProps<E>
): ReactNode => {
  const {
    as: Component,
    variant,
    padding,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    font,
    color,
    shadow,
    ring,
    gap,
    className,
    ...restProps
  } = mergeProps(unstyledBoxConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('box', className, {
    theme,
    variant,
    padding,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    font,
    color,
    shadow,
    ring,
    gap
  });

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
