import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledSpinnerBarProps } from './UnstyledSpinner.types';

type Props = MergeProps<
  UnstyledSpinnerBarProps,
  {
    barType: 'bar' | 'trail';
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledSpinnerBar = ({
  barType,
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props): ReactNode => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('spinnerBar', className, {
    barType,
    theme,
    disabled,
    variant,
    color
  });

  return (
    <circle
      className={mergedClassName}
      {...restProps}
    />
  );
};
