import type { ReactNode } from 'react';
import { Avatar } from '../core/components/Avatar/Avatar';
import type { AvatarProps } from '../core/components/Avatar/Avatar.types';

export const ExampleAvatar = (props: AvatarProps<'div'>): ReactNode => (
  <Avatar
    color="primary-on"
    {...props}
  />
);
