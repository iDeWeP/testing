import type { ComponentPropsWithRef, RefObject, ReactNode } from 'react';
import type {
  InputVariant,
  InputSize,
  Margin,
  Radius,
  Color,
  MergeProps
} from '../../types';

export type UnstyledInputContainerProps = ComponentPropsWithRef<'div'>;
export type UnstyledInputLabelProps = ComponentPropsWithRef<'label'>;
export type UnstyledInputDecoratorProps = ComponentPropsWithRef<'span'>;
export type UnstyledInputFieldsetProps = ComponentPropsWithRef<'fieldset'>;
export type UnstyledInputClearanceProps = ComponentPropsWithRef<'legend'>;

export type UnstyledInputComponentsProps = {
  container?: UnstyledInputContainerProps;
  label?: UnstyledInputLabelProps;
  leftDecorator?: UnstyledInputDecoratorProps;
  rightDecorator?: UnstyledInputDecoratorProps;
  fieldset?: UnstyledInputFieldsetProps;
  clearance?: UnstyledInputClearanceProps;
};

type OptionalProps = {
  inputRef?: RefObject<HTMLInputElement | null>;
  focused?: boolean;
  shifted?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledInputDefaultProps = {
  variant?: InputVariant;
  size?: InputSize;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  radius?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  componentsProps?: UnstyledInputComponentsProps;
};

export type UnstyledInputConfigProps = UnstyledInputDefaultProps;

export type UnstyledInputProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  UnstyledInputDefaultProps & OptionalProps
>;
