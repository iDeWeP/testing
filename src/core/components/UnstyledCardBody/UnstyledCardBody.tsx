import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { UnstyledCardBodyProps } from './UnstyledCardBody.types';
import { unstyledCardBodyConfig } from './unstyledCardBodyConfig';

export const UnstyledCardBody = <E extends ElementType>(
  props: UnstyledCardBodyProps<E>
): ReactNode => {
  const {
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
    cardPlacement,
    padding,
    margin,
    border,
    radius
  });

  return (
    <UnstyledPaper
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
