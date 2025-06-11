import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { Box } from '../Box/Box';
import type { LayoutProps } from './Layout.types';
import layoutConfig from './layoutConfig';

export const Layout = <E extends ElementType = 'main'>(
  props: LayoutProps<E>
) => {
  const {
    orientation,
    justify,
    align,
    gap,
    configClassName,
    className,
    ...restProps
  } = useMergeProps('layout', layoutConfig.props, props);

  const mergedClassName = mergeClassName(
    { component: 'layout', className, configClassName },
    {
      orientation,
      justify,
      align,
      gap
    }
  );

  return (
    <Box
      className={mergedClassName}
      {...restProps}
    />
  );
};
