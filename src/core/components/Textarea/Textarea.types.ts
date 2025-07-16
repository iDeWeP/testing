import type {
  InputVariant,
  InputSize,
  Radius,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledInputContainerProps,
  UnstyledInputLabelProps,
  UnstyledInputDecoratorProps,
  UnstyledInputFieldsetProps,
  UnstyledInputClearanceProps,
  UnstyledInputOptionalProps,
  UnstyledInputConfigProps,
  UnstyledInputProps
} from '../UnstyledInput/UnstyledInput.types';

export type TextareaContainerProps = UnstyledInputContainerProps;
export type TextareaLabelProps = UnstyledInputLabelProps;
export type TextareaDecoratorProps = UnstyledInputDecoratorProps;
export type TextareaFieldsetProps = UnstyledInputFieldsetProps;
export type TextareaClearanceProps = UnstyledInputClearanceProps;

export type TextareaComponentsProps = {
  container?: TextareaContainerProps;
  label?: TextareaLabelProps;
  leftDecorator?: TextareaDecoratorProps;
  rightDecorator?: TextareaDecoratorProps;
  fieldset?: TextareaFieldsetProps;
  clearance?: TextareaClearanceProps;
};

export type TextareaOptionalProps = UnstyledInputOptionalProps;

export type TextareaDefaultProps = {
  variant?: InputVariant;
  size?: InputSize;
  resize?: boolean;
  radius?: Radius;
  color?: Color;
  componentsProps?: TextareaComponentsProps;
};

export type TextareaConfigProps = MergeProps<
  UnstyledInputConfigProps,
  TextareaDefaultProps
>;

export type TextareaProps = MergeProps<
  UnstyledInputProps<'textarea'>,
  TextareaDefaultProps & TextareaOptionalProps
>;
