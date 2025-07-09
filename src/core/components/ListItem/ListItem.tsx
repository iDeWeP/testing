import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { ListItemProps } from './ListItem.types';
import { listItemConfig } from './listItemConfig';

export const ListItem = <E extends ElementType>(props: ListItemProps<E>) => {
  const {
    orientation,
    size: containerSize,
    className,
    ...restProps
  } = useMergeProps('listItem', listItemConfig.props, props);

  const mergedClassName = mergeClassName('card', className, {
    orientation,
    containerSize
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
