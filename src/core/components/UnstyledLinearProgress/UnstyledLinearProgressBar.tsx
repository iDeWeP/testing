import type {
  MergeProps,
  Theme,
  Variant,
  Orientation,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledLinearProgressBarProps } from './UnstyledLinearProgress.types';

type Props = MergeProps<
  UnstyledLinearProgressBarProps,
  {
    theme: Theme;
    disabled: boolean;
    value: number;
    variant: Variant;
    orientation: Orientation;
    color: Color;
  }
>;

export const UnstyledLinearProgressBar = ({
  theme,
  disabled,
  value,
  variant,
  orientation,
  color,
  className,
  style,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('linearProgressBar', className, {
    theme,
    disabled,
    variant,
    orientation,
    color,
    decorated: children
  });

  const length = orientation === 'row' ? 'width' : 'height';

  return (
    <div
      className={mergedClassName}
      style={{ [length]: `${value}%`, ...style }}
      {...restProps}
    >
      {children}
    </div>
  );
};
