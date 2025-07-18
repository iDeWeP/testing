import type {
  MergeComponentProps,
  Theme,
  Orientation,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    theme: Theme;
    disabled: boolean;
    value: number;
    orientation: Orientation;
    color: Color;
  }
>;

export const UnstyledLinearProgressBar = ({
  theme,
  disabled,
  value,
  orientation,
  color,
  className,
  children,
  style,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('linearProgressBar', className, {
    theme,
    disabled,
    orientation,
    color,
    decorated: !!children
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
