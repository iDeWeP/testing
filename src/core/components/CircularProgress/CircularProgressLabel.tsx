import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, Variant, Size, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { CircularProgressLabelProps } from './CircularProgress.types';

type Props = MergeProps<
  CircularProgressLabelProps,
  {
    disabled: boolean;
    variant: Variant;
    size: Size;
    color: Color;
  }
>;

export const CircularProgressLabel = ({
  disabled,
  variant,
  size,
  color,
  className,
  ...restProps
}: Props): ReactNode => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('circularProgressLabel', className, {
    theme,
    disabled,
    variant,
    size,
    color
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
