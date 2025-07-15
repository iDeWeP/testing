import type {
  InputVariant,
  InputSize,
  Radius,
  Color,
  Gap,
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

export type InputContainerProps = UnstyledInputContainerProps;
export type InputLabelProps = UnstyledInputLabelProps;
export type InputDecoratorProps = UnstyledInputDecoratorProps;
export type InputFieldsetProps = UnstyledInputFieldsetProps;
export type InputClearanceProps = UnstyledInputClearanceProps;

export type InputComponentsProps = {
  container?: InputContainerProps;
  label?: InputLabelProps;
  leftDecorator?: InputDecoratorProps;
  rightDecorator?: InputDecoratorProps;
  fieldset?: InputFieldsetProps;
  clearance?: InputClearanceProps;
};

export type InputOptionalProps = UnstyledInputOptionalProps;

export type InputDefaultProps = {
  variant?: InputVariant;
  size?: InputSize;
  radius?: Radius;
  color?: Color;
  gap?: Gap;
  componentsProps?: InputComponentsProps;
};

export type InputConfigProps = MergeProps<
  UnstyledInputConfigProps,
  InputDefaultProps
>;

export type InputProps = MergeProps<
  UnstyledInputProps<'input'>,
  InputDefaultProps & InputOptionalProps
>;
