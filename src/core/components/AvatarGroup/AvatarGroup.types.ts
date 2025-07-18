import type { ElementType } from 'react';
import type { Orientation, Spacing, Gap, MergeProps } from '../../types';
import type { AvatarProps } from '../Avatar/Avatar.types';
import type {
  UnstyledGroupConfigProps,
  UnstyledGroupProps
} from '../UnstyledGroup/UnstyledGroup.types';

export type AvatarGroupSurplusProps = Omit<AvatarProps<'div'>, 'as'>;

export type AvatarGroupComponentsProps = {
  surplus?: AvatarGroupSurplusProps;
};

export type AvatarGroupOptionalProps = {
  max?: number;
  total?: number;
};

export type AvatarGroupDefaultProps = {
  orientation?: Orientation;
  spacing?: Spacing;
  gap?: Gap;
  componentsProps?: AvatarGroupComponentsProps;
  surplus?: boolean;
};

export type AvatarGroupConfigProps = MergeProps<
  UnstyledGroupConfigProps,
  AvatarGroupDefaultProps
>;

export type AvatarGroupProps<E extends ElementType> = MergeProps<
  UnstyledGroupProps<E>,
  AvatarGroupDefaultProps & AvatarGroupOptionalProps
>;
