import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { cardConfig } from './cardConfig';

export const Card = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  const mergedProps = useMergeProps('card', cardConfig.props, props);

  return <Flex {...mergedProps} />;
};
