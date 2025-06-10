import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { LayoutProps } from './Layout.types';
import layoutConfig from './layoutConfig';

export const Layout = <E extends ElementType = 'main'>(
  props: LayoutProps<E>
) => {
  const {
    variant,
    orientation,
    scale,
    spacing,
    margin,
    border,
    radius,
    color,
    justify,
    align,
    gap,
    configClassName,
    className,
    as: Component = 'main',
    ...restProps
  } = useMergeProps('layout', layoutConfig.props, props);

  const mergedClassName = mergeClassName(
    { component: 'box', className, configClassName },
    {
      variant,
      orientation,
      scale,
      spacing,
      margin,
      border,
      radius,
      color,
      justify,
      align,
      gap
    }
  );

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
