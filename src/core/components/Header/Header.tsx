import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { HeaderProps } from './Header.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType>(
  props: HeaderProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('header', headerConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
