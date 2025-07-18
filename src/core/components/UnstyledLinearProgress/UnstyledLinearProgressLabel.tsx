import type { MergeComponentProps, Orientation } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    orientation: Orientation;
  }
>;

export const UnstyledLinearProgressLabel = ({
  orientation,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('linearProgressLabel', className, {
    orientation
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
