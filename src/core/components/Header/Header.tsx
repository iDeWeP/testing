import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType = 'header'>(
  props: FlexProps<E>
) => {
  const mergedProps = useMergeProps('header', headerConfig.props, props);

  return <Flex {...mergedProps} />;
};
