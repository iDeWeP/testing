import type { MergeComponentProps, Theme, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'circle',
  {
    theme: Theme;
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledSpinnerTrail = ({
  theme,
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledSpinnerTrail', className, {
    theme,
    disabled,
    variant,
    color
  });

  return (
    <circle
      cx="20"
      cy="20"
      r="18"
      className={mergedClassName}
      {...restProps}
    />
  );
};
