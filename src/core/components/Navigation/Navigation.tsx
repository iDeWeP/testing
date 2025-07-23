import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { NavigationProps } from './Navigation.types';
import { navigationConfig } from './navigationConfig';

export const Navigation = <E extends ElementType>(
  props: NavigationProps<E>
): ReactNode => {
  const mergedProps = useMergeProps(
    'navigation',
    navigationConfig.props,
    props
  );

  return <UnstyledPaper {...mergedProps} />;
};
