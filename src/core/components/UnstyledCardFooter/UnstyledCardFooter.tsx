import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { UnstyledCardFooterProps } from './UnstyledCardFooter.types';
import { unstyledCardFooterConfig } from './unstyledCardFooterConfig';

export const UnstyledCardFooter = <E extends ElementType>(
  props: UnstyledCardFooterProps<E>
): ReactNode => {
  const { className, variant, padding, margin, border, radius, ...restProps } =
    mergeProps(unstyledCardFooterConfig.props, props);

  const mergedClassName = mergeClassName('cardFooter', className, {
    variant,
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
