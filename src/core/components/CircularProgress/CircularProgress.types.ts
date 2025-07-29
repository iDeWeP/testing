import type { Variant, Size, Color, MergeProps } from '../../types';
import type {
  UnstyledCircularProgressContainerProps,
  UnstyledCircularProgressLabelProps,
  UnstyledCircularProgressBarProps,
  UnstyledCircularProgressConfigProps,
  UnstyledCircularProgressProps
} from '../UnstyledCircularProgress/UnstyledCircularProgress.types';

export type CircularProgressContainerProps =
  UnstyledCircularProgressContainerProps;
export type CircularProgressLabelProps = UnstyledCircularProgressLabelProps;
export type CircularProgressBarProps = UnstyledCircularProgressBarProps;

export type CircularProgressComponentsProps = {
  container?: CircularProgressContainerProps;
  label?: CircularProgressLabelProps;
  bar?: CircularProgressBarProps;
  trail?: CircularProgressBarProps;
  innerBorder?: CircularProgressBarProps;
  outerBorder?: CircularProgressBarProps;
};

export type DefaultProps = {
  value?: number;
  variant?: Variant;
  size?: Size;
  color?: Color;
  componentsProps?: CircularProgressComponentsProps;
};

export type CircularProgressConfigProps = MergeProps<
  UnstyledCircularProgressConfigProps,
  DefaultProps
>;

export type CircularProgressProps = MergeProps<
  UnstyledCircularProgressProps,
  DefaultProps
>;
