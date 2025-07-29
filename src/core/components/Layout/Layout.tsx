import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledLayout } from '../UnstyledLayout/UnstyledLayout';
import type { LayoutProps } from './Layout.types';
import { layoutConfig } from './layoutConfig';

export const Layout = <E extends ElementType>(
  props: LayoutProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('layout', layoutConfig.props, props);

  return <UnstyledLayout {...mergedProps} />;
};
