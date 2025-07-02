import type {
  Variant,
  Color,
  RippleEffect,
  MergeProps,
  ComponentRefProps
} from '../../types';

type OptionalProps = {
  valid?: boolean;
  invalid?: boolean;
};

export type UnstyledRippleDefaultProps = {
  stateful?: boolean;
  variant?: Variant;
  color?: Color;
  effect?: RippleEffect;
};

export type UnstyledRippleConfigProps = UnstyledRippleDefaultProps;

export type UnstyledRippleProps = MergeProps<
  ComponentRefProps<'span'>,
  UnstyledRippleDefaultProps & OptionalProps
>;
