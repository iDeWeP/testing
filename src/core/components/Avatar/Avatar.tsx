import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledAvatar } from '../UnstyledAvatar/UnstyledAvatar';
import type { AvatarProps } from './Avatar.types';
import { avatarConfig } from './avatarConfig';

export const Avatar = <E extends ElementType>(props: AvatarProps<E>) => {
  const mergedProps = useMergeProps('avatar', avatarConfig.props, props);

  return <UnstyledAvatar {...mergedProps} />;
};
