import type { ComponentRefProps } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = ComponentRefProps<'legend'>;

export const UnstyledInputClearance = ({ className, ...restProps }: Props) => {
  const mergedClassName = mergeClassName('unstyledInputClearance', className);

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};
