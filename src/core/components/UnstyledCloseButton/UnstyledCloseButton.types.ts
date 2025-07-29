import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  SVGNodeProps,
  MergeProps,
  OmitDecorators
} from '../../types';
import type {
  UnstyledButtonRippleProps,
  UnstyledButtonLoaderProps,
  UnstyledButtonBarProps,
  UnstyledButtonConfigProps,
  UnstyledButtonProps
} from '../UnstyledButton/UnstyledButton.types';

export type UnstyledCloseButtonIconProps = ComponentRefProps<'svg'>;
export type UnstyledCloseButtonRippleProps = UnstyledButtonRippleProps;
export type UnstyledCloseButtonLoaderProps = UnstyledButtonLoaderProps;
export type UnstyledCloseButtonBarProps = UnstyledButtonBarProps;

export type UnstyledCloseButtonComponentsProps = {
  icon?: UnstyledCloseButtonIconProps;
  ripple?: UnstyledCloseButtonRippleProps;
  loader?: UnstyledCloseButtonLoaderProps;
  bar?: UnstyledCloseButtonBarProps;
  innerBorder?: UnstyledCloseButtonBarProps;
  outerBorder?: UnstyledCloseButtonBarProps;
};

type OptionalProps = {
  loading?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

type DefaultProps = {
  componentsProps?: UnstyledCloseButtonComponentsProps;
};

export type UnstyledCloseButtonConfigProps = MergeProps<
  UnstyledButtonConfigProps,
  DefaultProps
>;

export type UnstyledCloseButtonProps<E extends ElementType> = MergeProps<
  OmitDecorators<UnstyledButtonProps<E>>,
  DefaultProps & OptionalProps
>;
