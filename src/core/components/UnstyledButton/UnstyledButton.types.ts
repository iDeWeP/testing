import type { ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  Loading,
  Variant,
  DefaultSize,
  ButtonScale,
  Margin,
  Radius,
  Color,
  Effect,
  Ripple,
  MergeProps
} from '../../types';

export type UnstyledButtonComponentsProps = {
  ripple?: ComponentRefProps<'span'>;
  spinner?: ComponentRefProps<'svg'>;
  bar?: ComponentRefProps<'circle'>;
  trail?: ComponentRefProps<'circle'>;
  innerBorder?: ComponentRefProps<'circle'>;
  outerBorder?: ComponentRefProps<'circle'>;
};

type OptionalProps = {
  loading?: Loading;
  disabled?: boolean;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledButtonDefaultProps = {
  as?: ElementType;
  variant?: Variant;
  size?: DefaultSize;
  scale?: ButtonScale;
  margin?: Margin;
  border?: boolean;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledButtonConfigProps = UnstyledButtonDefaultProps;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledButtonDefaultProps & OptionalProps
>;
