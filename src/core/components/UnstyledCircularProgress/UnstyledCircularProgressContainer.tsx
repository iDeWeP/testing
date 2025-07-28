import type { ReactNode } from 'react';
import type { MergeProps, Size, Margin } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledCircularProgressContainerProps } from './UnstyledCircularProgress.types';

type Props = MergeProps<
  UnstyledCircularProgressContainerProps,
  {
    value: number;
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

export const UnstyledCircularProgressContainer = ({
  value,
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
      {...setAria('progress', { min: 0, max: 100, value })}
      {...restProps}
    />
  );
};
