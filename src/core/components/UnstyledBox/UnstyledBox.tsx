import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledBoxProps } from './UnstyledBox.types';
import { unstyledBoxConfig } from './unstyledBoxConfig';

export const UnstyledBox = <E extends ElementType>(
  props: UnstyledBoxProps<E>
) => {
  const {
    as: Component,
    variant,
    padding,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
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
    font,
    color,
    shadow,
    gap,
    gx,
    gy,
    className,
    ...restProps
  } = mergeProps(unstyledBoxConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledBox', className, {
    theme,
    variant,
    padding,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
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
    font,
    color,
    shadow,
    gap,
    gx,
    gy
  });

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
