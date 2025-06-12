import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { mainConfig } from './mainConfig';

export const Main = <E extends ElementType = 'main'>(props: FlexProps<E>) => {
  const mergedProps = useMergeProps('main', mainConfig.props, props);

  return <Flex {...mergedProps} />;
};
