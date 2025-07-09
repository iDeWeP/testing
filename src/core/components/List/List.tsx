import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { ListProps } from './List.types';
import { listConfig } from './listConfig';

export const List = <E extends ElementType>(props: ListProps<E>) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'list',
    listConfig.props,
    props
  );

  const mergedClassName = mergeClassName('list', className, { orientation });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
