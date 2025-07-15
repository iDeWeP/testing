import { cloneElement } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import type { IconProps } from './Icon.types';
import { iconConfig } from './IconConfig';

export const Icon = (props: IconProps) => {
  const {
    variant,
    size: font,
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
    color,
    shadow,
    className,
    children,
    ...restProps
  } = useMergeProps('icon', iconConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('icon', className, {
    theme,
    variant,
    font,
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
    color,
    shadow
  });

  if (!children) {
    return null;
  }

  return cloneElement(children, {
    className: mergedClassName,
    ...setAria('icon'),
    ...restProps
  });
};
