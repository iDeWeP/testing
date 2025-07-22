import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { LayoutProps } from './Layout.types';
import { layoutConfig } from './layoutConfig';

export const Layout = <E extends ElementType>(
  props: LayoutProps<E>
): ReactNode => {
  const { className, ...restProps } = useMergeProps(
    'layout',
    layoutConfig.props,
    props
  );

  const mergedClassName = mergeClassName('layout', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
