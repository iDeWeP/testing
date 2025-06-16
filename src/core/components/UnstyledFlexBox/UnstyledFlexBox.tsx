import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledFlexBoxProps } from './UnstyledFlexBox.types';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import { unstyledFlexBoxConfig } from './unstyledFlexBoxConfig';

export const UnstyledFlexBox = <E extends ElementType = 'div'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const { direction, wrap, justify, align, gap, className, ...restProps } =
    mergeProps(unstyledFlexBoxConfig.props, props);

  const mergedClassName = mergeClassName('unstyledFlexBox', className, {
    direction,
    wrap,
    justify,
    align,
    gap
  });

  return (
    <UnstyledBox
      as="div"
      className={mergedClassName}
      {...restProps}
    />
  );
};
