import type { ComponentPropsWithRef, ReactNode, ElementType } from 'react';
import type {
  ComponentRefProps,
  MergeProps,
  Variant,
  Size,
  Margin,
  SpinnerBorder,
  Color,
  Ring,
  Loading,
  DefaultScale,
  Effect,
  Ripple,
  OmitRing
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';
import type { UnstyledLoaderBarProps } from '../UnstyledLoader/UnstyledLoader.types';

export type UnstyledButtonRippleProps = ComponentRefProps<'span'>;
export type UnstyledButtonBarProps = UnstyledLoaderBarProps;

export type UnstyledButtonLoaderProps = MergeProps<
  ComponentPropsWithRef<'svg'>,
  {
    spin?: boolean;
    value?: number;
    variant?: Variant;
    size?: Size;
    thickness?: number;
    margin?: Margin;
    m?: Margin;
    mx?: Margin;
    my?: Margin;
    mt?: Margin;
    mb?: Margin;
    ml?: Margin;
    mr?: Margin;
    border?: SpinnerBorder;
    color?: Color;
    ring?: Ring;
  }
>;

export type UnstyledButtonComponentsProps = {
  ripple?: UnstyledButtonRippleProps;
  loader?: UnstyledButtonLoaderProps;
  bar?: UnstyledButtonBarProps;
  innerBorder?: UnstyledButtonBarProps;
  outerBorder?: UnstyledButtonBarProps;
};

export type UnstyledButtonOptionalProps = {
  loading?: Loading;
  disabled?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

export type UnstyledButtonDefaultProps = {
  scale?: DefaultScale;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledButtonConfigProps = MergeProps<
  OmitRing<UnstyledContainerConfigProps>,
  UnstyledButtonDefaultProps
>;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  OmitRing<UnstyledContainerProps<E>>,
  UnstyledButtonDefaultProps & UnstyledButtonOptionalProps
>;
