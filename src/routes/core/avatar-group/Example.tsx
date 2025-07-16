import { ExampleAvatar } from '../../../components/ExampleAvatar';
import { AvatarGroup } from '../../../core/components/AvatarGroup/AvatarGroup';
import type { AvatarGroupProps } from '../../../core/components/AvatarGroup/AvatarGroup.types';

export const Example = ({
  children = 'AVATAR-GROUP',
  ...restProps
}: AvatarGroupProps<'div'>) => (
  <AvatarGroup {...restProps}>
    <ExampleAvatar>{children}</ExampleAvatar>
    <ExampleAvatar>{children}</ExampleAvatar>
    <ExampleAvatar>{children}</ExampleAvatar>
    <ExampleAvatar>{children}</ExampleAvatar>
    <ExampleAvatar>{children}</ExampleAvatar>
  </AvatarGroup>
);
