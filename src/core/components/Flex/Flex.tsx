import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { FlexProps } from './Flex.types';
import { flexConfig } from './flexConfig';

export const Flex = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  const mergedProps = useMergeProps('flex', flexConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
