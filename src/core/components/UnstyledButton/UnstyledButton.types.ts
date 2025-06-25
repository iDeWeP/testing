import type { ElementType, ReactNode } from 'react';
import type {
  ComponentRefProps,
  Loading,
  Variant,
  Size,
  ButtonScale,
  Margin,
  Radius,
  Color,
  Effect,
  Ripple,
  MergeProps
} from '../../types';

export type UnstyledButtonComponentProps = {
  ripple?: ComponentRefProps<'span'>;
  spinner?: ComponentRefProps<'svg'>;
  bar?: ComponentRefProps<'circle'>;
  trail?: ComponentRefProps<'circle'>;
  innerBorder?: ComponentRefProps<'circle'>;
  outerBorder?: ComponentRefProps<'circle'>;
};

type OptionalProps = {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledButtonDefaultProps = {
  as?: ElementType;
  loading?: Loading;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  scale?: ButtonScale;
  margin?: Margin;
  border?: boolean;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentProps;
  ripple?: Ripple;
};

export type UnstyledButtonConfigProps = UnstyledButtonDefaultProps;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  ComponentRefProps<E>,
  UnstyledButtonDefaultProps & OptionalProps
>;
