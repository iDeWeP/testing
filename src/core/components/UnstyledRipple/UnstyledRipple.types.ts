import type { ComponentPropsWithRef } from 'react';
import type {
  Variant,
  RippleScale,
  Color,
  RippleEffect,
  MergeProps
} from '../../types';

export type UnstyledRippleOptionalProps = {
  valid?: boolean;
  invalid?: boolean;
  stateful?: boolean;
};

export type UnstyledRippleDefaultProps = {
  variant?: Variant;
  scale?: RippleScale;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = UnstyledRippleDefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentPropsWithRef<'span'>,
  UnstyledRippleDefaultProps & UnstyledRippleOptionalProps
>;
