import type { ElementType } from 'react';
import type { MergeProps } from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

type DefaultProps = {
  initials?: boolean;
};

export type UnstyledAvatarConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  DefaultProps
>;

export type UnstyledAvatarProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  DefaultProps
>;
