import type { ReactNode } from 'react';
import type { MergeProps } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputBodyProps } from './UnstyledInput.types';

type Props = MergeProps<UnstyledInputBodyProps, { on: boolean }>;

export const UnstyledInputBody = ({
  on,
  className,
  ...restProps
}: Props): ReactNode => {
  const mergedClassName = mergeClassName('inputBody', className, { on });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
