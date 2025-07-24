import type { ElementType } from 'react';
import type { MergeProps } from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type UnstyledAvatarDefaultProps = {
  initials?: boolean;
};

export type UnstyledAvatarConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  UnstyledAvatarDefaultProps
>;

export type UnstyledAvatarProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  UnstyledAvatarDefaultProps
>;
