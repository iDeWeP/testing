import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
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
