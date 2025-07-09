import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { TitleProps } from './Title.types';
import { titleConfig } from './titleConfig';

export const Title = <E extends ElementType>(props: TitleProps<E>) => {
  const { font, className, ...restProps } = useMergeProps(
    'title',
    titleConfig.props,
    props
  );

  const mergedClassName = mergeClassName('title', className, { font });

  return (
    <UnstyledBox
      font="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
