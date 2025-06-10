import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { FlexProps } from './Flex.types';
import flexConfig from './flexConfig';

export const Flex = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  const {
    scale,
    spacing,
    margin,
    direction,
    wrap,
    justify,
    align,
    gap,
    configClassName,
    className,
    as: Component = 'div',
    ...restProps
  } = useMergeProps('flex', flexConfig.props, props);

  const mergedClassName = mergeClassName(
    { component: 'flex', className, configClassName },
    {
      scale,
      spacing,
      margin,
      direction,
      wrap,
      justify,
      align,
      gap
    }
  );

  return (
    <Component
      className={mergedClassName}
      {...restProps}
    />
  );
};
