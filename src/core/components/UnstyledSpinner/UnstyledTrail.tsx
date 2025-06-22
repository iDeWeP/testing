import type { MergeComponentProps, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'circle',
  {
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledTrail = ({
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledTrail', className, {
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
