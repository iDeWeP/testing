import type { ReactNode, ElementType, ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  InputVariant,
  InputSize,
  Margin,
  Radius,
  Color,
  MergeProps
} from '../../types';

export type UnstyledInputContainerProps = ComponentRefProps<'div'>;
export type UnstyledInputLabelProps = ComponentRefProps<'label'>;
export type UnstyledInputDecoratorProps = ComponentRefProps<'span'>;
export type UnstyledInputFieldsetProps = ComponentRefProps<'fieldset'>;
export type UnstyledInputClearanceProps = ComponentRefProps<'legend'>;

export type UnstyledInputComponentsProps = {
  container?: UnstyledInputContainerProps;
  label?: UnstyledInputLabelProps;
  leftDecorator?: UnstyledInputDecoratorProps;
  rightDecorator?: UnstyledInputDecoratorProps;
  fieldset?: UnstyledInputFieldsetProps;
  clearance?: UnstyledInputClearanceProps;
};

type OptionalProps = {
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
  as?: 'input' | 'textarea';
  variant?: InputVariant;
  size?: InputSize;
  resize?: boolean;
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

export type UnstyledInputProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledInputDefaultProps & OptionalProps
>;
