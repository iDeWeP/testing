import type { ComponentRefProps, Gap, MergeProps } from '../../types';
import type {
  UnstyledSpinnerBarProps,
  UnstyledSpinnerConfigProps,
  UnstyledSpinnerProps
} from '../UnstyledSpinner/UnstyledSpinner.types';

export type UnstyledCircularProgressContainerProps = ComponentRefProps<'div'>;
export type UnstyledCircularProgressLabelProps = ComponentRefProps<'span'>;
export type UnstyledCircularProgressBarProps = UnstyledSpinnerBarProps;

export type UnstyledCircularProgressComponentsProps = {
  container?: UnstyledCircularProgressContainerProps;
  label?: UnstyledCircularProgressLabelProps;
  bar?: UnstyledCircularProgressBarProps;
  trail?: UnstyledCircularProgressBarProps;
  innerBorder?: UnstyledCircularProgressBarProps;
  outerBorder?: UnstyledCircularProgressBarProps;
};

type DefaultProps = {
  gap?: Gap;
  componentsProps?: UnstyledCircularProgressComponentsProps;
};

export type UnstyledCircularProgressConfigProps = MergeProps<
  UnstyledSpinnerConfigProps,
  DefaultProps
>;

export type UnstyledCircularProgressProps = MergeProps<
  UnstyledSpinnerProps,
  DefaultProps
>;
