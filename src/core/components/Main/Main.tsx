import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { MainProps } from './Main.types';
import { mainConfig } from './mainConfig';

export const Main = <E extends ElementType>(props: MainProps<E>) => {
  const mergedProps = useMergeProps('main', mainConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
