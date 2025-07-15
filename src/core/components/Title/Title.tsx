import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { getReversedFont } from '../../utils/merge-class-name/spacing';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { TitleProps } from './Title.types';
import { titleConfig } from './titleConfig';

export const Title = <E extends ElementType>(props: TitleProps<E>) => {
  const { font, ...restProps } = useMergeProps(
    'title',
    titleConfig.props,
    props
  );

  return (
    <UnstyledBox
      font={getReversedFont(font)}
      {...restProps}
    />
  );
};
