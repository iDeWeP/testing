import type { ComponentPropsWithRef } from 'react';
import type {
  Variant,
  InnerScale,
  Color,
  RippleEffect,
  MergeProps
} from '../../types';

export type UnstyledRippleOptionalProps = {
  valid?: boolean;
  invalid?: boolean;
};

export type UnstyledRippleDefaultProps = {
  stateful?: boolean;
  variant?: Variant;
  scale?: InnerScale;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = UnstyledRippleDefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentPropsWithRef<'span'>,
  UnstyledRippleDefaultProps & UnstyledRippleOptionalProps
>;
