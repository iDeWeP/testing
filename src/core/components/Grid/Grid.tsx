import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { GridProps } from './Grid.types';
import { gridConfig } from './gridConfig';

export const Grid = <E extends ElementType>(props: GridProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'grid',
    gridConfig.props,
    props
  );

  const mergedClassName = mergeClassName('grid', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
