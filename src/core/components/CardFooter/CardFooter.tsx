import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { CardFooterProps } from './CardFooter.types';
import { cardFooterConfig } from './cardFooterConfig';

export const CardFooter = <E extends ElementType>(
  props: CardFooterProps<E>
) => {
  const mergedProps = useMergeProps(
    'cardFooter',
    cardFooterConfig.props,
    props
  );

  return <UnstyledCard {...mergedProps} />;
};
