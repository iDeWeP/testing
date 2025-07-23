import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { PaperProps } from './Paper.types';
import { paperConfig } from './paperConfig';

export const Paper = <E extends ElementType>(
  props: PaperProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('paper', paperConfig.props, props);

  return <UnstyledPaper {...mergedProps} />;
};
