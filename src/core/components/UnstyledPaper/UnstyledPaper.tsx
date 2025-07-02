import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledPaperProps } from './UnstyledPaper.types';
import { unstyledPaperConfig } from './unstyledPaperConfig';

export const UnstyledPaper = <E extends ElementType = 'div'>(
  props: UnstyledPaperProps<E>
) => {
  const {
    orientation,
    shadow,
    justify: justifyContent,
    align: alignItems,
    gap,
    className,
    ...restProps
  } = mergeProps(unstyledPaperConfig.props, props);

  const mergedClassName = mergeClassName('unstyledPaper', className, {
    orientation,
    shadow,
    justifyContent,
    alignItems,
    gap
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
