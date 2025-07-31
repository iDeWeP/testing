import type { ReactNode } from 'react';
import { ExampleAvatar } from '../../../components/ExampleAvatar';
import { UnstyledAvatarGroup } from '../../../core/components/UnstyledAvatarGroup/UnstyledAvatarGroup';
import type { UnstyledAvatarGroupProps } from '../../../core/components/UnstyledAvatarGroup/UnstyledAvatarGroup.types';

type Props = {
  clear?: boolean;
} & UnstyledAvatarGroupProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-AVATAR-GROUP',
  ...restProps
}: Props): ReactNode => (
  <UnstyledAvatarGroup
    color={clear ? 'unset' : 'primary-on'}
    surplus={!clear}
    {...restProps}
  >
    <ExampleAvatar>{children} #1</ExampleAvatar>
    <ExampleAvatar>{children} #2</ExampleAvatar>
    <ExampleAvatar>{children} #3</ExampleAvatar>
    <ExampleAvatar>{children} #4</ExampleAvatar>
    <ExampleAvatar>{children} #5</ExampleAvatar>
  </UnstyledAvatarGroup>
);
