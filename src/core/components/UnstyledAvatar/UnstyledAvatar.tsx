import type { ElementType } from 'react';
import { getInitials } from '../../../utils/utils/get-initials/get-initials';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { UnstyledAvatarProps } from './UnstyledAvatar.types';
import { unstyledAvatarConfig } from './unstyledAvatarConfig';

export const UnstyledAvatar = <E extends ElementType>(
  props: UnstyledAvatarProps<E>
) => {
  const { initials, ring, className, children, ...restProps } = mergeProps(
    unstyledAvatarConfig.props,
    props
  );

  const theme = useTheme();

  const mergedClassName = mergeClassName('avatar', className, {
    theme,
    ring
  });

  return (
    <UnstyledContainer
      scale="square"
      className={mergedClassName}
      {...restProps}
    >
      {getInitials(children, initials)}
    </UnstyledContainer>
  );
};
