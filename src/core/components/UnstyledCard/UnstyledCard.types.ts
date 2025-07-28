import type { ElementType } from 'react';
import type {
  ComponentRefProps,
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

export type UnstyledCardRippleProps = ComponentRefProps<'span'>;

export type UnstyledCardComponentsProps = {
  ripple?: UnstyledCardRippleProps;
};

type OptionalProps = {
  disabled?: boolean;
  clickable?: boolean;
};

type DefaultProps = {
  orientation?: Orientation;
  effect?: Effect;
  componentsProps?: UnstyledCardComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCardConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type UnstyledCardProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps & OptionalProps
>;
