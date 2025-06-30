import type { RefObject, ReactNode } from 'react';
import type {
  ComponentRefProps,
  InputVariant,
  InputSize,
  Scale,
  Margin,
  Radius,
  Color,
  MergeProps
} from '../../types';

export type UnstyledInputComponentProps = {
  container?: ComponentRefProps<'div'>;
  label?: ComponentRefProps<'label'>;
  leftDecorator?: ComponentRefProps<'span'>;
  rightDecorator?: ComponentRefProps<'span'>;
  fieldset?: ComponentRefProps<'fieldset'>;
  clearance?: ComponentRefProps<'legend'>;
};

type OptionalProps = {
  inputRef?: RefObject<HTMLInputElement | null>;
  focused?: boolean;
  shifted?: boolean;
  label?: ReactNode;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledInputDefaultProps = {
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  scale?: Scale;
  margin?: Margin;
  radius?: Radius;
  color?: Color;
  componentsProps?: UnstyledInputComponentProps;
};

export type UnstyledInputConfigProps = UnstyledInputDefaultProps;

export type UnstyledInputProps = MergeProps<
  ComponentRefProps<'input'>,
  UnstyledInputDefaultProps & OptionalProps
>;
