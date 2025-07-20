import type { MergeProps, Orientation, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledLinearProgressLabelProps } from './UnstyledLinearProgress.types';

type Props = MergeProps<
  UnstyledLinearProgressLabelProps,
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
