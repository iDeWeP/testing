import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import type { UnstyledBoxProps } from './UnstyledBox.types';
import { unstyledBoxConfig } from './unstyledBoxConfig';

export const UnstyledBox = <E extends ElementType = 'div'>(
  props: UnstyledBoxProps<E>
) => {
  const {
    disabled,
    variant,
    size: spacing,
    scale,
    margin,
    border,
    radius,
    color,
    className,
    as: Component,
    ...restProps
  } = mergeProps(unstyledBoxConfig.props, props);

  const mergedClassName = mergeClassName('unstyledBox', className, {
    disabled,
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
