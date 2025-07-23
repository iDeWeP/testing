import type { ReactNode, ElementType, ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  Gap,
  InputVariant,
  InputSize,
  Width,
  Margin,
  Radius,
  Color,
  MergeProps
} from '../../types';

export type UnstyledInputContainerProps = ComponentRefProps<'div'>;
export type UnstyledInputLabelProps = ComponentRefProps<'label'>;

export type UnstyledInputDecoratorProps = {
  gap?: Gap;
} & ComponentRefProps<'span'>;

export type UnstyledInputBodyProps = ComponentRefProps<'span'>;
export type UnstyledInputFieldsetProps = ComponentRefProps<'fieldset'>;
export type UnstyledInputClearanceProps = ComponentRefProps<'legend'>;

export type UnstyledInputComponentsProps = {
  container?: UnstyledInputContainerProps;
  label?: UnstyledInputLabelProps;
  startDecorator?: UnstyledInputDecoratorProps;
  endDecorator?: UnstyledInputDecoratorProps;
  body?: UnstyledInputBodyProps;
  fieldset?: UnstyledInputFieldsetProps;
  clearance?: UnstyledInputClearanceProps;
};

export type UnstyledInputOptionalProps = {
  focused?: boolean;
  shifted?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

export type UnstyledInputDefaultProps = {
  as?: 'input' | 'textarea';
  variant?: InputVariant;
  size?: InputSize;
  resize?: boolean;
  width?: Width;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  radius?: Radius;
  r?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  gap?: Gap;
  componentsProps?: UnstyledInputComponentsProps;
};

export type UnstyledInputConfigProps = UnstyledInputDefaultProps;

export type UnstyledInputProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  UnstyledInputDefaultProps & UnstyledInputOptionalProps
>;
