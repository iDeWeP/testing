import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledCardFooterProps } from './UnstyledCardFooter.types';
import { unstyledCardFooterConfig } from './unstyledCardFooterConfig';

export const UnstyledCardFooter = <E extends ElementType>(
  props: UnstyledCardFooterProps<E>
) => {
  const {
    orientation,
    className,
    variant,
    padding,
    margin,
    border,
    radius,
    ...restProps
  } = mergeProps(unstyledCardFooterConfig.props, props);

  const mergedClassName = mergeClassName('cardFooter', className, {
    variant,
    orientation,
    padding,
    margin,
    border,
    radius
  });

  return (
    <UnstyledBox
      variant={variant}
      padding="unset"
      margin="unset"
      border="unset"
      radius="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
