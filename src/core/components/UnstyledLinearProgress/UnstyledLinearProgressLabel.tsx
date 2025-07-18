import type { MergeComponentProps, Orientation, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    orientation: Orientation;
    gap: Gap;
  }
>;

export const UnstyledLinearProgressLabel = ({
  orientation,
  gap,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('linearProgressLabel', className, {
    orientation,
    gap
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
