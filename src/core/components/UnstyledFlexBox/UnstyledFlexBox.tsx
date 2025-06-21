import type { ElementType } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeClassName } from '../../utils/mergeClassName/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledFlexBoxProps } from './UnstyledFlexBox.types';
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
      className={mergedClassName}
      {...restProps}
    />
  );
};
