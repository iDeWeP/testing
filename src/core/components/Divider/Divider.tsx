import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledDivider } from '../UnstyledDivider/UnstyledDivider';
import type { DividerProps } from './Divider.types';
import { dividerConfig } from './dividerConfig';

export const Divider = <E extends ElementType>(props: DividerProps<E>) => {
  const mergedProps = useMergeProps('divider', dividerConfig.props, props);

  return <UnstyledDivider {...mergedProps} />;
};
