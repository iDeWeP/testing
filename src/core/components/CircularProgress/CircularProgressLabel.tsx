import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeComponentProps, Variant, Size, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    disabled: boolean;
    variant: Variant;
    size: Size;
    color: Color;
  }
>;

export const CircularProgressLabel = ({
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('circularProgressLabel', className, {
    theme,
    disabled,
    variant,
    color
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
