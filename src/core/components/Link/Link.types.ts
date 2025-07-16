import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  DefaultScale,
  Radius,
  Color,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonSpinnerProps,
  UnstyledButtonBarProps,
  UnstyledButtonTrailProps,
  UnstyledButtonInnerBorderProps,
  UnstyledButtonOuterBorderProps,
  UnstyledButtonOptionalProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type LinkRippleProps = UnstyledButtonRippleProps;
export type LinkSpinnerProps = UnstyledButtonSpinnerProps;
export type LinkBarProps = UnstyledButtonBarProps;
export type LinkTrailProps = UnstyledButtonTrailProps;
export type LinkInnerBorderProps = UnstyledButtonInnerBorderProps;
export type LinkOuterBorderProps = UnstyledButtonOuterBorderProps;

export type LinkComponentsProps = {
  ripple?: LinkRippleProps;
  spinner?: LinkSpinnerProps;
  bar?: LinkBarProps;
  trail?: LinkTrailProps;
  innerBorder?: LinkInnerBorderProps;
  outerBorder?: LinkOuterBorderProps;
};

export type LinkOptionalProps = Omit<UnstyledButtonOptionalProps, 'checked'>;

export type LinkDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: LinkComponentsProps;
  ripple?: Ripple;
};

export type LinkConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  LinkDefaultProps
>;

export type LinkProps<E extends ElementType> = MergeProps<
  Omit<UnstyledButtonProps<E>, 'checked'>,
  LinkDefaultProps & LinkOptionalProps
>;
