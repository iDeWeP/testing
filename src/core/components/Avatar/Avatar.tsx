import type { ElementType } from 'react';
import { getInitials } from '../../../utils/utils/get-initials/get-initials';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { AvatarProps } from './Avatar.types';
import { avatarConfig } from './avatarConfig';

export const Avatar = <E extends ElementType>(props: AvatarProps<E>) => {
  const { initials, children, ...restProps } = useMergeProps(
    'avatar',
    avatarConfig.props,
    props
  );

  return (
    <UnstyledContainer
      scale="square"
      {...restProps}
    >
      {getInitials(children, initials)}
    </UnstyledContainer>
  );
};
