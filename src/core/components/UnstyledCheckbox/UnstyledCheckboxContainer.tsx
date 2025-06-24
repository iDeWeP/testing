import type { Margin, MergeComponentProps, Size } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    size: Size;
    margin: Margin;
    hasRipple: boolean;
  }
>;

export const UnstyledCheckboxContainer = ({
  size,
  margin,
  hasRipple,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledCheckboxContainer',
    className,
    {
      size,
      margin,
      hasRipple
    }
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
