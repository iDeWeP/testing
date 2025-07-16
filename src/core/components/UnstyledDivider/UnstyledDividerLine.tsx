import type { MergeComponentProps, Orientation } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'hr',
  {
    orientation: Orientation;
  }
>;

export const UnstyledDividerLine = ({
  orientation,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('dividerLine', className, {
    orientation
  });

  return (
    <hr
      className={mergedClassName}
      {...restProps}
    />
  );
};
