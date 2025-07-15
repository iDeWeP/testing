import type { MergeComponentProps, Size, Margin } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    size: Size;
    margin: Margin;
    m: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
  }
>;

export const CircularProgressContainer = ({
  size,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'circularProgressContainer',
    className,
    {
      size,
      margin,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr
    }
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
