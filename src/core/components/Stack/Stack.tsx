import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { stackConfig } from './stackConfig';

export const Stack = <E extends ElementType = 'div'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('stack', stackConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
