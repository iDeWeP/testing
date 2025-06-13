import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { TitleProps } from './Title.types';
import { titleConfig } from './titleConfig';

export const Title = <E extends ElementType = 'h3'>(props: TitleProps<E>) => {
  const { size, className, ...restProps } = useMergeProps(
    'title',
    titleConfig.props,
    props
  );

  const mergedClassName = mergeClassName('title', className, { size });

  return (
    <UnstyledTypography
      size={size}
      className={mergedClassName}
      {...restProps}
    />
  );
};
