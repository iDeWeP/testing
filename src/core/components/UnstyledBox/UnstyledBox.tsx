import type { ElementType } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeClassName } from '../../utils/mergeClassName/merge-class-name';
import type { UnstyledBoxProps } from './UnstyledBox.types';
import { unstyledBoxConfig } from './unstyledBoxConfig';

export const UnstyledBox = <E extends ElementType = 'div'>(
  props: UnstyledBoxProps<E>
) => {
  const {
    as: Component,
    variant,
    size: spacing,
    scale,
    margin,
    border,
    radius,
    color,
    className,
    ...restProps
  } = mergeProps(unstyledBoxConfig.props, props);

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
