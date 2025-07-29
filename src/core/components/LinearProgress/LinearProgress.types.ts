import type {
  Variant,
  Orientation,
  Size,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledLinearProgressLabelProps,
  UnstyledLinearProgressBarProps,
  UnstyledLinearProgressConfigProps,
  UnstyledLinearProgressProps
} from '../UnstyledLinearProgress/UnstyledLinearProgress.types';

export type LinearProgressLabelProps = UnstyledLinearProgressLabelProps;
export type LinearProgressBarProps = UnstyledLinearProgressBarProps;

export type LinearProgressComponentsProps = {
  label?: LinearProgressLabelProps;
  bar?: LinearProgressBarProps;
};

type OptionalProps = {
  disabled?: boolean;
};

type DefaultProps = {
  value?: number;
  variant?: Variant;
  orientation?: Orientation;
  size?: Size;
  color?: Color;
  componentsProps?: LinearProgressComponentsProps;
};

export type LinearProgressConfigProps = MergeProps<
  UnstyledLinearProgressConfigProps,
  DefaultProps
>;

export type LinearProgressProps = MergeProps<
  UnstyledLinearProgressProps,
  DefaultProps & OptionalProps
>;
