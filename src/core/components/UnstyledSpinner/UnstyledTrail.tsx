import type { FC } from 'react';
import type { MergeElementProps, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';

export type Props = MergeElementProps<
  'circle',
  {
    isDisabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledTrail: FC<Props> = ({
  isDisabled,
  variant,
  color,
  className,
  ...restProps
}) => {
  const mergedClassName = mergeClassName('unstyledTrail', className, {
    isDisabled,
    variant,
    color
  });

  return (
    <circle
      cx="20"
      cy="20"
      r="18"
      className={mergedClassName}
      {...restProps}
    />
  );
};
