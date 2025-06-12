import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { Box } from '../Box/Box';
import type { FlexProps } from './Flex.types';
import { flexConfig } from './flexConfig';

export const Flex = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  const { direction, wrap, justify, align, gap, className, ...restProps } =
    useMergeProps('flex', flexConfig.props, props);

  const mergedClassName = mergeClassName('flex', className, {
    direction,
    wrap,
    justify,
    align,
    gap
  });

  return (
    <Box
      className={mergedClassName}
      {...restProps}
    />
  );
};
