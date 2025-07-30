import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledAvatarGroup } from '../UnstyledAvatarGroup/UnstyledAvatarGroup';
import type { AvatarGroupProps } from './AvatarGroup.types';
import { avatarGroupConfig } from './avatarGroupConfig';

export const AvatarGroup = <E extends ElementType>(
  props: AvatarGroupProps<E>
): ReactNode => {
  const mergedProps = useMergeProps(
    'avatarGroup',
    avatarGroupConfig.props,
    props
  );

  return <UnstyledAvatarGroup {...mergedProps} />;
};
