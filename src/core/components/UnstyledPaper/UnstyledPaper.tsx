import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledPaperProps } from './UnstyledPaper.types';
import { unstyledPaperConfig } from './unstyledPaperConfig';

export const UnstyledPaper = <E extends ElementType>(
  props: UnstyledPaperProps<E>
): ReactNode => {
  const { orientation, className, ...restProps } = mergeProps(
    unstyledPaperConfig.props,
    props
  );

  const mergedClassName = mergeClassName('paper', className, {
    orientation
  });

  return (
    <UnstyledBox
      gx="unset"
      gy="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
