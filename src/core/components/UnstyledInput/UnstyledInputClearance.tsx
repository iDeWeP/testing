import type { ReactNode } from 'react';
import type { MergeProps, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputClearanceProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputClearanceProps,
  {
    gap: Gap;
  }
>;

export const UnstyledInputClearance = ({
  gap,
  className,
  ...restProps
}: Props): ReactNode => {
  const mergedClassName = mergeClassName('inputClearance', className, {
    gap
  });

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};
