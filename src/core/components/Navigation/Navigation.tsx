import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledList } from '../UnstyledList/UnstyledList';
import type { NavigationProps } from './Navigation.types';
import { navigationConfig } from './navigationConfig';

export const Navigation = <E extends ElementType>(
  props: NavigationProps<E>
) => {
  const mergedProps = useMergeProps(
    'navigation',
    navigationConfig.props,
    props
  );

  return <UnstyledList {...mergedProps} />;
};
