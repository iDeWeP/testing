import type { ElementType } from 'react';
import { getInitials } from '../../../utils/utils/get-initials/get-initials';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { UnstyledAvatarProps } from './UnstyledAvatar.types';
import { unstyledAvatarConfig } from './unstyledAvatarConfig';

export const UnstyledAvatar = <E extends ElementType>(
  props: UnstyledAvatarProps<E>
) => {
  const { initials, children, ...restProps } = mergeProps(
    unstyledAvatarConfig.props,
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
