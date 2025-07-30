import type { ElementType } from 'react';
import type { MergeProps } from '../../types';
import type { UnstyledAvatarProps } from '../UnstyledAvatar/UnstyledAvatar.types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type UnstyledAvatarGroupSurplusProps = UnstyledAvatarProps<'div'>;

export type UnstyledAvatarGroupComponentsProps = {
  surplus?: UnstyledAvatarGroupSurplusProps;
};

type OptionalProps = {
  max?: number;
  total?: number;
};

type DefaultProps = {
  componentsProps?: UnstyledAvatarGroupComponentsProps;
  surplus?: boolean;
};

export type UnstyledAvatarGroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  DefaultProps
>;

export type UnstyledAvatarGroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  DefaultProps & OptionalProps
>;
