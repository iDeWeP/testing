import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledCardBodyProps } from './UnstyledCardBody.types';
import { unstyledCardBodyConfig } from './unstyledCardBodyConfig';

export const UnstyledCardBody = <E extends ElementType>(
  props: UnstyledCardBodyProps<E>
): ReactNode => {
  const {
    orientation,
    placement: cardPlacement,
    className,
    variant,
    padding,
    margin,
    border,
    radius,
    ...restProps
  } = mergeProps(unstyledCardBodyConfig.props, props);

  const mergedClassName = mergeClassName('cardBody', className, {
    variant,
    orientation,
    cardPlacement,
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
      gx="unset"
      gy="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
