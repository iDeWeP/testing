import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledGroup } from '../UnstyledGroup/UnstyledGroup';
import type { GroupProps } from './Group.types';
import { groupConfig } from './groupConfig';

export const Group = <E extends ElementType>(props: GroupProps<E>) => {
  const mergedProps = useMergeProps('group', groupConfig.props, props);

  return <UnstyledGroup {...mergedProps} />;
};
