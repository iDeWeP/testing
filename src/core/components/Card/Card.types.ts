import type { ElementType } from 'react';
import type { Variant, Padding, Color, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardRippleProps,
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type CardRippleProps = UnstyledCardRippleProps;

export type CardComponentsProps = {
  ripple?: CardRippleProps;
};

type OptionalProps = {
  disabled?: boolean;
  clickable?: boolean;
};

type DefaultProps = {
  variant?: Variant;
  padding?: Padding;
  color?: Color;
  gap?: Gap;
  componentsProps?: CardComponentsProps;
};

export type CardConfigProps = MergeProps<UnstyledCardConfigProps, DefaultProps>;

export type CardProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  DefaultProps & OptionalProps
>;
