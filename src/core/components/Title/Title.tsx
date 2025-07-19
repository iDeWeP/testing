import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { setReversedFont } from '../../utils/set-reversed-font/set-reversed-font';
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
      font={setReversedFont(font)}
      {...restProps}
    />
  );
};
