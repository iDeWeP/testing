import type { ReactNode } from 'react';
import { UnstyledAvatar } from '../../../core/components/UnstyledAvatar/UnstyledAvatar';
import type { UnstyledAvatarProps } from '../../../core/components/UnstyledAvatar/UnstyledAvatar.types';

type Props = {
  clear?: boolean;
} & UnstyledAvatarProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-AVATAR',
  ...restProps
}: Props): ReactNode => (
  <UnstyledAvatar
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledAvatar>
);
