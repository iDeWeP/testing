import type { ReactNode } from 'react';
import type {
  InputVariant,
  InputSize,
  Width,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledInputContainerProps,
  UnstyledInputLabelProps,
  UnstyledInputDecoratorProps,
  UnstyledInputBodyProps,
  UnstyledInputFieldsetProps,
  UnstyledInputClearanceProps,
  UnstyledInputConfigProps,
  UnstyledInputProps
} from '../UnstyledInput/UnstyledInput.types';

export type InputContainerProps = UnstyledInputContainerProps;
export type InputLabelProps = UnstyledInputLabelProps;
export type InputDecoratorProps = UnstyledInputDecoratorProps;
export type InputBodyProps = UnstyledInputBodyProps;
export type InputFieldsetProps = UnstyledInputFieldsetProps;
export type InputClearanceProps = UnstyledInputClearanceProps;

export type InputComponentsProps = {
  container?: InputContainerProps;
  label?: InputLabelProps;
  startDecorator?: InputDecoratorProps;
  endDecorator?: InputDecoratorProps;
  body?: InputBodyProps;
  fieldset?: InputFieldsetProps;
  clearance?: InputClearanceProps;
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
  variant?: InputVariant;
  size?: InputSize;
  width?: Width;
  color?: Color;
  componentsProps?: InputComponentsProps;
};

export type InputConfigProps = MergeProps<
  UnstyledInputConfigProps,
  DefaultProps
>;

export type InputProps = MergeProps<
  UnstyledInputProps<'input'>,
  DefaultProps & OptionalProps
>;
