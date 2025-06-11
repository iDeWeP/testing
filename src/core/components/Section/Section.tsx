import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex.types';
import sectionConfig from './sectionConfig';

export const Section = <E extends ElementType = 'section'>(
  props: FlexProps<E>
) => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <Flex {...mergedProps} />;
};
