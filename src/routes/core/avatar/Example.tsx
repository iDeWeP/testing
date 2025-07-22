import type { ReactNode } from 'react';
import { Avatar } from '../../../core/components/Avatar/Avatar';
import type { AvatarProps } from '../../../core/components/Avatar/Avatar.types';

export const Example = ({
  children = 'AVATAR',
  ...restProps
}: AvatarProps<'div'>): ReactNode => <Avatar {...restProps}>{children}</Avatar>;
