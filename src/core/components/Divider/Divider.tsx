import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import type { DividerProps } from './Divider.types';
import { dividerConfig } from './dividerConfig';
import { DividerLine } from './DividerLine';

export const Divider = <E extends ElementType>(props: DividerProps<E>) => {
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
    gap,
    className,
    componentsProps,
    children,
    ...restProps
  } = useMergeProps('divider', dividerConfig.props, props);

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
    gap,
    decorated: !!children
  });

  return (
    <Component
      className={mergedClassName}
      {...setAria('divider', { orientation })}
      {...restProps}
    >
      {(placement !== 'start' || !children) && (
        <DividerLine
          orientation={orientation}
          {...componentsProps.startLine}
        />
      )}
      {children}
      {placement !== 'end' && children && (
        <DividerLine
          orientation={orientation}
          {...componentsProps.endLine}
        />
      )}
    </Component>
  );
};
