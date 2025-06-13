import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { StackProps } from './Stack.types';
import { stackConfig } from './stackConfig';

export const Stack = <E extends ElementType = 'div'>(props: StackProps<E>) => {
  const mergedProps = useMergeProps('stack', stackConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
