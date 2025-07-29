import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledLabel } from '../UnstyledLabel/UnstyledLabel';
import type { LabelProps } from './Label.types';
import { labelConfig } from './labelConfig';

export const Label = <E extends ElementType>(
  props: LabelProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('label', labelConfig.props, props);

  return <UnstyledLabel {...mergedProps} />;
};
