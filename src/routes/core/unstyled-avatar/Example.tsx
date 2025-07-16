import { UnstyledAvatar } from '../../../core/components/UnstyledAvatar/UnstyledAvatar';
import type { UnstyledAvatarProps } from '../../../core/components/UnstyledAvatar/UnstyledAvatar.types';

type Props = {
  clear?: boolean;
} & UnstyledAvatarProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-AVATAR',
  ...restProps
}: Props) => (
  <UnstyledAvatar
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledAvatar>
);
