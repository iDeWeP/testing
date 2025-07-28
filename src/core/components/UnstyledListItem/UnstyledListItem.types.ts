import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  CheckableVariant,
  Orientation,
  Effect,
  Ripple,
  MergeProps,
  OmitGaps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledListItemRippleProps = ComponentRefProps<'span'>;

export type UnstyledListItemComponentsProps = {
  ripple?: UnstyledListItemRippleProps;
};

type OptionalProps = {
  selected?: boolean;
  disabled?: boolean;
};

type DefaultProps = {
  variant?: CheckableVariant;
  orientation?: Orientation;
  effect?: Effect;
  componentsProps?: UnstyledListItemComponentsProps;
  ripple?: Ripple;
};

export type UnstyledListItemConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type UnstyledListItemProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps & OptionalProps
>;
