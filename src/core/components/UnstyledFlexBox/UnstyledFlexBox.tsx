import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledFlexBoxProps } from './UnstyledFlexBox.types';

export const UnstyledFlexBox = <E extends ElementType = 'div'>({
  direction,
  wrap,
  justify,
  align,
  gap,
  className,
  ...restProps
}: UnstyledFlexBoxProps<E>) => {
  const mergedClassName = mergeClassName('unstyledFlexBox', className, {
    direction,
    wrap,
    justify,
    align,
    gap
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
