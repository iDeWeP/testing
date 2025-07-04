import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { SidebarProps } from './Sidebar.types';
import { sidebarConfig } from './sidebarConfig';

export const Sidebar = <E extends ElementType = 'aside'>(
  props: SidebarProps<E>
) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'sidebar',
    sidebarConfig.props,
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
