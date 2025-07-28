import type { ReactNode, ElementType, ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  MergeProps,
  Gap,
  InputVariant,
  InputSize,
  Width,
  Margin,
  Radius,
  Color,
  Ring
} from '../../types';

export type UnstyledInputContainerProps = ComponentRefProps<'div'>;
export type UnstyledInputLabelProps = ComponentRefProps<'label'>;
export type UnstyledInputBodyProps = ComponentRefProps<'span'>;
export type UnstyledInputFieldsetProps = ComponentRefProps<'fieldset'>;
export type UnstyledInputClearanceProps = ComponentRefProps<'legend'>;

export type UnstyledInputDecoratorProps = MergeProps<
  ComponentRefProps<'span'>,
  {
    gap?: Gap;
  }
>;

export type UnstyledInputComponentsProps = {
  container?: UnstyledInputContainerProps;
  label?: UnstyledInputLabelProps;
  startDecorator?: UnstyledInputDecoratorProps;
  endDecorator?: UnstyledInputDecoratorProps;
  body?: UnstyledInputBodyProps;
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
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

type DefaultProps = {
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
  ring?: Ring;
  gap?: Gap;
  componentsProps?: UnstyledInputComponentsProps;
};

export type UnstyledInputConfigProps = DefaultProps;

export type UnstyledInputProps<E extends ElementType> = MergeProps<
  ComponentPropsWithRef<E>,
  DefaultProps & OptionalProps
>;
