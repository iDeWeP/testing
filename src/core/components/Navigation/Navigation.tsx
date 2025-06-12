import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { navigationConfig } from './navigationConfig';

export const Navigation = <E extends ElementType = 'nav'>(
  props: FlexProps<E>
) => {
  const mergedProps = useMergeProps(
    'navigation',
    navigationConfig.props,
    props
  );

  return <Flex {...mergedProps} />;
};
