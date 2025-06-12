import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType = 'footer'>(
  props: FlexProps<E>
) => {
  const mergedProps = useMergeProps('footer', footerConfig.props, props);

  return <Flex {...mergedProps} />;
};
