import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { CardProps } from './Card.types';
import { cardConfig } from './cardConfig';

export const Card = <E extends ElementType>(props: CardProps<E>): ReactNode => {
  const mergedProps = useMergeProps('card', cardConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
