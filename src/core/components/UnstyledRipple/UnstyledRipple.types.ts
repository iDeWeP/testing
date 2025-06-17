import type {
  Variant,
  Color,
  RippleEffect,
  MergeProps,
  ComponentRefProps
} from '../../types';

export type UnstyledRippleDefaultProps = {
  stateful?: boolean;
  valid?: boolean;
  invalid?: boolean;
  variant?: Variant;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = UnstyledRippleDefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentRefProps<'span'>,
  UnstyledRippleDefaultProps
>;
