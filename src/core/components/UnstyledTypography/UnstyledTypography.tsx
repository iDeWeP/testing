import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledTypographyProps } from './UnstyledTypography.types';

export const UnstyledTypography = <E extends ElementType = 'span'>({
  size,
  weight,
  underline,
  wordBreak,
  wrap: textWrap,
  align: textAlign,
  overflow: textOverflow,
  className,
  ...restProps
}: UnstyledTypographyProps<E>) => {
  const mergedClassName = mergeClassName('unstyledTypography', className, {
    size,
    weight,
    underline,
    wordBreak,
    textWrap,
    textAlign,
    textOverflow
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
