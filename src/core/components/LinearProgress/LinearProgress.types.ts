import type {
  Variant,
  Orientation,
  Size,
  Radius,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledLinearProgressLabelProps,
  UnstyledLinearProgressBarProps,
  UnstyledLinearProgressOptionalProps,
  UnstyledLinearProgressConfigProps,
  UnstyledLinearProgressProps
} from '../UnstyledLinearProgress/UnstyledLinearProgress.types';

export type LinearProgressLabelProps = UnstyledLinearProgressLabelProps;
export type LinearProgressBarProps = UnstyledLinearProgressBarProps;

export type LinearProgressComponentsProps = {
  label?: LinearProgressLabelProps;
  bar?: LinearProgressBarProps;
};

export type LinearProgressOptionalProps = UnstyledLinearProgressOptionalProps;

export type LinearProgressDefaultProps = {
  value?: number;
  variant?: Variant;
  orientation?: Orientation;
  size?: Size;
  radius?: Radius;
  color?: Color;
  componentsProps?: LinearProgressComponentsProps;
};

export type LinearProgressConfigProps = MergeProps<
  UnstyledLinearProgressConfigProps,
  LinearProgressDefaultProps
>;

export type LinearProgressProps = MergeProps<
  UnstyledLinearProgressProps<E>,
  LinearProgressDefaultProps & LinearProgressOptionalProps
>;
