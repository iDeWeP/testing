import { Avatar } from '../core/components/Avatar/Avatar';
import type { AvatarProps } from '../core/components/Avatar/Avatar.types';

export const ExampleAvatar = (props: AvatarProps<'div'>) => (
  <Avatar {...props} />
);
