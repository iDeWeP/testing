import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { StackProps } from './Stack.types';
import { stackConfig } from './stackConfig';

export const Stack = <E extends ElementType>(
  props: StackProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('stack', stackConfig.props, props);

  return (
    <UnstyledPaper
      orientation="col"
      {...mergedProps}
    />
  );
};
