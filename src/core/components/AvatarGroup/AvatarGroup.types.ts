import type { ElementType } from 'react';
import type { Orientation, GroupGap, MergeProps } from '../../types';
import type {
  UnstyledAvatarGroupSurplusProps,
  UnstyledAvatarGroupConfigProps,
  UnstyledAvatarGroupProps
} from '../UnstyledAvatarGroup/UnstyledAvatarGroup.types';

export type AvatarGroupSurplusProps = UnstyledAvatarGroupSurplusProps;

export type AvatarGroupComponentsProps = {
  surplus?: AvatarGroupSurplusProps;
};

type OptionalProps = {
  max?: number;
  total?: number;
};

type DefaultProps = {
  orientation?: Orientation;
  gap?: GroupGap;
  componentsProps?: AvatarGroupComponentsProps;
  surplus?: boolean;
};

export type AvatarGroupConfigProps = MergeProps<
  UnstyledAvatarGroupConfigProps,
  DefaultProps
>;

export type AvatarGroupProps<E extends ElementType> = MergeProps<
  UnstyledAvatarGroupProps<E>,
  DefaultProps & OptionalProps
>;
