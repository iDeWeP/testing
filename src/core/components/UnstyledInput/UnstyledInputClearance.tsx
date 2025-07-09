import type { ComponentPropsWithRef } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = ComponentPropsWithRef<'legend'>;

export const UnstyledInputClearance = ({ className, ...restProps }: Props) => {
  const mergedClassName = mergeClassName('unstyledInputClearance', className);

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};
