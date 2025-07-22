import type { ReactNode } from 'react';
import type { MergeProps, Size, Margin } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { CircularProgressContainerProps } from './CircularProgress.types';

type Props = MergeProps<
  CircularProgressContainerProps,
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
}: Props): ReactNode => {
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
