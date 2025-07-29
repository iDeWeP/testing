import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { setReversedFont } from '../../utils/set-reversed-font/set-reversed-font';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { TitleProps } from './Title.types';
import { titleConfig } from './titleConfig';

export const Title = <E extends ElementType>(
  props: TitleProps<E>
): ReactNode => {
  const { font, ...restProps } = useMergeProps(
    'title',
    titleConfig.props,
    props
  );

  return (
    <UnstyledTypography
      font={setReversedFont(font)}
      {...restProps}
    />
  );
};
