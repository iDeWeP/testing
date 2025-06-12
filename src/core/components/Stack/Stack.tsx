import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { stackConfig } from './stackConfig';

export const Stack = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  const mergedProps = useMergeProps('stack', stackConfig.props, props);

  return <Flex {...mergedProps} />;
};
