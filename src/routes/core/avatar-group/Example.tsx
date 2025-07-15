import { ExampleAvatar } from '../../../components/ExampleAvatar';
import { AvatarGroup } from '../../../core/components/AvatarGroup/AvatarGroup';
import type { AvatarGroupProps } from '../../../core/components/AvatarGroup/AvatarGroup.types';

export const Example = ({
  children = 'AVATAR-GROUP',
  ...restProps
}: AvatarGroupProps<'div'>) => (
  <AvatarGroup {...restProps}>
    <ExampleAvatar>{`${children} #1`}</ExampleAvatar>
    <ExampleAvatar>{`${children} #2`}</ExampleAvatar>
    <ExampleAvatar>{`${children} #3`}</ExampleAvatar>
  </AvatarGroup>
);
