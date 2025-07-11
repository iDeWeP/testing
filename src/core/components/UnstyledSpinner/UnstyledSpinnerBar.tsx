import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeComponentProps, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'circle',
  {
    barType: 'bar' | 'trail';
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledSpinnerBar = ({
  barType,
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledSpinnerBar', className, {
    barType,
    theme,
    disabled,
    variant,
    color
  });

  return (
    <circle
      className={mergedClassName}
      {...restProps}
    />
  );
};
