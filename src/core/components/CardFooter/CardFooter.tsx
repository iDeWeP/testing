import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCardFooter } from '../UnstyledCardFooter/UnstyledCardFooter';
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

  return <UnstyledCardFooter {...mergedProps} />;
};
