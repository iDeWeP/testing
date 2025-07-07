import type { ComponentPropsWithRef } from 'react';
import type {
  Variant,
  RipplePlacement,
  Color,
  RippleEffect,
  MergeProps
} from '../../types';

type OptionalProps = {
  valid?: boolean;
  invalid?: boolean;
};

export type UnstyledRippleDefaultProps = {
  stateful?: boolean;
  variant?: Variant;
  placement?: RipplePlacement;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = UnstyledRippleDefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentPropsWithRef<'span'>,
  UnstyledRippleDefaultProps & OptionalProps
>;
