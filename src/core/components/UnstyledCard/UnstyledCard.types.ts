import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  Variant,
  Orientation,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledCardRippleProps = ComponentRefProps<'span'>;

export type UnstyledCardComponentsProps = {
  ripple?: UnstyledCardRippleProps;
};

export type UnstyledCardOptionalProps = {
  disabled?: boolean;
  clickable?: boolean;
};

export type UnstyledCardDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  effect?: Effect;
  componentsProps?: UnstyledCardComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCardConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledCardDefaultProps
>;

export type UnstyledCardProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledCardDefaultProps & UnstyledCardOptionalProps
>;
