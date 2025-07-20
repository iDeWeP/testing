import type { MergeProps, Orientation } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledDividerLineProps } from './UnstyledDivider.types';

type Props = MergeProps<
  UnstyledDividerLineProps,
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
