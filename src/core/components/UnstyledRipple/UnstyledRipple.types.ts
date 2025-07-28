import type { ComponentPropsWithRef } from 'react';
import type {
  Variant,
  RippleScale,
  Color,
  RippleEffect,
  MergeProps
} from '../../types';

type OptionalProps = {
  valid?: boolean;
  invalid?: boolean;
  stateful?: boolean;
};

type DefaultProps = {
  variant?: Variant;
  scale?: RippleScale;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = DefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentPropsWithRef<'span'>,
  DefaultProps & OptionalProps
>;
