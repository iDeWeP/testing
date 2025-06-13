import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { UnstyledBoxProps } from './UnstyledBox.types';

export const UnstyledBox = <E extends ElementType = 'div'>({
  variant,
  size: spacing,
  scale,
  margin,
  border,
  radius,
  color,
  className,
  as: Component = 'div',
  ...restProps
}: UnstyledBoxProps<E>) => {
  const mergedClassName = mergeClassName('unstyledBox', className, {
    variant,
    spacing,
    scale,
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
