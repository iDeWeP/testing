import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, Variant, Size, Color, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { CircularProgressLabelProps } from './CircularProgress.types';

type Props = MergeProps<
  CircularProgressLabelProps,
  {
    disabled: boolean;
    variant: Variant;
    size: Size;
    color: Color;
    gap: Gap;
  }
>;

export const CircularProgressLabel = ({
  disabled,
  variant,
  size,
  color,
  gap,
  className,
  ...restProps
}: Props): ReactNode => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('circularProgressLabel', className, {
    theme,
    disabled,
    variant,
    size,
    color,
    gap
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
