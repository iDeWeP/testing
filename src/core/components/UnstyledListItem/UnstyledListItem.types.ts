import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  CheckableVariant,
  Orientation,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledListItemRippleProps = ComponentRefProps<'span'>;

export type UnstyledListItemComponentsProps = {
  ripple?: UnstyledListItemRippleProps;
};

export type UnstyledListItemOptionalProps = {
  selected?: boolean;
  disabled?: boolean;
};

export type UnstyledListItemDefaultProps = {
  variant?: CheckableVariant;
  orientation?: Orientation;
  effect?: Effect;
  componentsProps?: UnstyledListItemComponentsProps;
  ripple?: Ripple;
};

export type UnstyledListItemConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledListItemDefaultProps
>;

export type UnstyledListItemProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledListItemDefaultProps & UnstyledListItemOptionalProps
>;
