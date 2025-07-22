import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { getMaxTotal } from '../../utils/get-max-total/get-max-total';
import { UnstyledAvatar } from '../UnstyledAvatar/UnstyledAvatar';
import { UnstyledGroup } from '../UnstyledGroup/UnstyledGroup';
import type { AvatarGroupProps } from './AvatarGroup.types';
import { avatarGroupConfig } from './avatarGroupConfig';

export const AvatarGroup = <E extends ElementType>(
  props: AvatarGroupProps<E>
): ReactNode => {
  const { max, total, componentsProps, surplus, children, ...restProps } =
    useMergeProps('avatarGroup', avatarGroupConfig.props, props);

  const { nodes, count } = getMaxTotal(surplus, children, max, total);

  return (
    <UnstyledGroup {...restProps}>
      {nodes}
      {surplus && !!count && (
        <UnstyledAvatar
          as="div"
          initials={false}
          variant="solid"
          size="md"
          color="surface"
          margin="unset"
          m="unset"
          mx="unset"
          my="unset"
          mt="unset"
          mb="unset"
          ml="unset"
          mr="unset"
          border="auto"
          radius="full"
          r="unset"
          rt="unset"
          rb="unset"
          rl="unset"
          rr="unset"
          rtl="unset"
          rtr="unset"
          rbl="unset"
          rbr="unset"
          shadow="unset"
          ring="unset"
          gap="unset"
          {...componentsProps.surplus}
        >
          +{count}
        </UnstyledAvatar>
      )}
    </UnstyledGroup>
  );
};
