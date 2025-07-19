import type { ElementType } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledDividerProps } from './UnstyledDivider.types';
import { unstyledDividerConfig } from './unstyledDividerConfig';
import { UnstyledDividerLine } from './UnstyledDividerLine';

export const UnstyledDivider = <E extends ElementType>(
  props: UnstyledDividerProps<E>
) => {
  const {
    as: Component,
    orientation,
    placement,
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
    font,
    color,
    ring,
    gap,
    className,
    componentsProps,
    children,
    ...restProps
  } = mergeProps(unstyledDividerConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('divider', className, {
    theme,
    orientation,
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
    font,
    color,
    ring,
    gap,
    decorated: children
  });

  return (
    <Component
      className={mergedClassName}
      {...setAria('divider', { orientation })}
      {...restProps}
    >
      {(placement !== 'start' || !children) && (
        <UnstyledDividerLine
          orientation={orientation}
          {...componentsProps.startLine}
        />
      )}
      {children}
      {placement !== 'end' && children && (
        <UnstyledDividerLine
          orientation={orientation}
          {...componentsProps.endLine}
        />
      )}
    </Component>
  );
};
