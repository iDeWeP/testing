import type { MergeComponentProps, Size } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    size: Size;
  }
>;

export const CircularProgressContainer = ({
  size,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'circularProgressContainer',
    className,
    {
      size
    }
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
