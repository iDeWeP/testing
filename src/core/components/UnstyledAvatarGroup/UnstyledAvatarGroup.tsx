import type { ElementType, ReactNode } from 'react';
import { getMaxTotal } from '../../utils/get-max-total/get-max-total';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledAvatar } from '../UnstyledAvatar/UnstyledAvatar';
import { UnstyledGroup } from '../UnstyledGroup/UnstyledGroup';
import type { UnstyledAvatarGroupProps } from './UnstyledAvatarGroup.types';
import { unstyledAvatarGroupConfig } from './unstyledAvatarGroupConfig';

export const UnstyledAvatarGroup = <E extends ElementType>(
  props: UnstyledAvatarGroupProps<E>
): ReactNode => {
  const { max, total, componentsProps, surplus, children, ...restProps } =
    mergeProps(unstyledAvatarGroupConfig.props, props);

  const { nodes, count } = getMaxTotal(max, total, surplus, children);

  return (
    <UnstyledGroup {...restProps}>
      {nodes}
      {surplus && !!count && (
        <UnstyledAvatar
          as="div"
          initials={false}
          variant="solid"
          size="md"
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
          color="surface"
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
