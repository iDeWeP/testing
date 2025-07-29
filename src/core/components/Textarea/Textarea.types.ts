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

export type TextareaContainerProps = UnstyledInputContainerProps;
export type TextareaLabelProps = UnstyledInputLabelProps;
export type TextareaDecoratorProps = UnstyledInputDecoratorProps;
export type TextareaBodyProps = UnstyledInputBodyProps;
export type TextareaFieldsetProps = UnstyledInputFieldsetProps;
export type TextareaClearanceProps = UnstyledInputClearanceProps;

export type TextareaComponentsProps = {
  container?: TextareaContainerProps;
  label?: TextareaLabelProps;
  startDecorator?: TextareaDecoratorProps;
  endDecorator?: TextareaDecoratorProps;
  body?: TextareaBodyProps;
  fieldset?: TextareaFieldsetProps;
  clearance?: TextareaClearanceProps;
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
  resize?: boolean;
  width?: Width;
  color?: Color;
  componentsProps?: TextareaComponentsProps;
};

export type TextareaConfigProps = MergeProps<
  UnstyledInputConfigProps,
  DefaultProps
>;

export type TextareaProps = MergeProps<
  UnstyledInputProps<'textarea'>,
  DefaultProps & OptionalProps
>;
