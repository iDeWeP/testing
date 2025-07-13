import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { getInitials } from '../../utils/get-initials/get-initials';
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
    <UnstyledContainer {...restProps}>
      {getInitials(children, initials)}
    </UnstyledContainer>
  );
};
