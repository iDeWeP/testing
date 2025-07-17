import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { ContainerProps } from './Container.types';
import { containerConfig } from './containerConfig';

export const Container = <E extends ElementType>(props: ContainerProps<E>) => {
  const mergedProps = useMergeProps('container', containerConfig.props, props);

  return <UnstyledContainer {...mergedProps} />;
};
