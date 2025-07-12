import type { MergeComponentProps, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'legend',
  {
    gap: Gap;
  }
>;

export const UnstyledInputClearance = ({
  gap,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputClearance', className, {
    gap
  });

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};
