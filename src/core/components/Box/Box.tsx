import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { BoxProps } from './Box.types';

export const Box = <E extends ElementType = 'div'>({
  variant,
  scale,
  spacing,
  margin,
  border,
  radius,
  color,
  className,
  as: Component,
  ...restProps
}: BoxProps<E>) => {
  const mergedClassName = mergeClassName('box', className, {
    variant,
    scale,
    spacing,
    margin,
    border,
    radius,
    color
  });

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
