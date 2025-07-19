import type { MergeComponentProps, Theme, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'circle',
  {
    barType: 'bar' | 'trail';
    theme: Theme;
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledSpinnerBar = ({
  barType,
  theme,
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('spinnerBar', className, {
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
