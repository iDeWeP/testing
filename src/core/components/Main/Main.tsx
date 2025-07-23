import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { MainProps } from './Main.types';
import { mainConfig } from './mainConfig';

export const Main = <E extends ElementType>(props: MainProps<E>): ReactNode => {
  const mergedProps = useMergeProps('main', mainConfig.props, props);

  return <UnstyledPaper {...mergedProps} />;
};
