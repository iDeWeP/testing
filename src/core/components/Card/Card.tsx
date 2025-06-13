import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { CardProps } from './Card.types';
import { cardConfig } from './cardConfig';

export const Card = <E extends ElementType = 'div'>(props: CardProps<E>) => {
  const mergedProps = useMergeProps('card', cardConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
