import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import type { BoxProps } from './Box.types';
import boxConfig from './boxConfig';
import { useTheme } from '../../hooks/use-theme/useTheme';

export const Box = <E extends ElementType = 'div'>(props: BoxProps<E>) => {
  const {
    variant,
    scale,
    spacing,
    border,
    radius,
    color,
    className,
    configClassName,
    as: Component = 'div',
    ...restProps
  } = useMergeProps('box', boxConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName(
    { component: 'box', className, configClassName, theme },
    {
      defaultVariant: variant,
      scale,
      spacing,
      border,
      radius,
      defaultColor: color
    }
  );

  return <Component className={mergedClassName} {...restProps} />;
};
