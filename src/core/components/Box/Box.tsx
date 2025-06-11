import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { BoxProps } from './Box.types';
import boxConfig from './boxConfig';

export const Box = <E extends ElementType = 'div'>(props: BoxProps<E>) => {
  const {
    variant,
    scale,
    spacing,
    margin,
    border,
    radius,
    color,
    className,
    configClassName,
    as,
    ...restProps
  } = useMergeProps('box', boxConfig.props, props);

  const mergedClassName = mergeClassName(
    { component: 'box', className, configClassName },
    {
      variant,
      scale,
      spacing,
      margin,
      border,
      radius,
      color
    }
  );

  const Component = as as ElementType;

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
