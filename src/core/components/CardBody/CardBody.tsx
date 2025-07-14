import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { CardBodyProps } from './CardBody.types';
import { cardBodyConfig } from './cardBodyConfig';

export const CardBody = <E extends ElementType>(props: CardBodyProps<E>) => {
  const mergedProps = useMergeProps('cardBody', cardBodyConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
