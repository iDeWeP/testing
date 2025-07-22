import type { ComponentPropsWithRef, ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  MergeProps,
  Variant,
  Size,
  SpinnerBorder,
  Color,
  Loading,
  DefaultScale,
  Radius,
  Effect,
  Ripple
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';
import type { UnstyledLoaderBarProps } from '../UnstyledLoader/UnstyledLoader.types';

export type UnstyledButtonRippleProps = ComponentRefProps<'span'>;
export type UnstyledButtonLoaderProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  {
    spin?: boolean;
    value?: number;
    variant?: Variant;
    size?: Size;
    thickness?: number;
    border?: SpinnerBorder;
    color?: Color;
    ring?: Color;
  }
>;
export type UnstyledButtonBarProps = UnstyledLoaderBarProps;

export type UnstyledButtonComponentsProps = {
  ripple?: UnstyledButtonRippleProps;
  loader?: UnstyledButtonLoaderProps;
  bar?: UnstyledButtonBarProps;
  innerBorder?: UnstyledButtonBarProps;
  outerBorder?: UnstyledButtonBarProps;
};

export type UnstyledButtonOptionalProps = {
  checked?: boolean;
  loading?: Loading;
  disabled?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

export type UnstyledButtonDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: DefaultScale;
  radius?: Radius;
  color?: Color;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledButtonConfigProps = MergeProps<
  Omit<UnstyledContainerConfigProps, 'ring'>,
  UnstyledButtonDefaultProps
>;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  Omit<UnstyledContainerProps<E>, 'ring'>,
  UnstyledButtonDefaultProps & UnstyledButtonOptionalProps
>;
