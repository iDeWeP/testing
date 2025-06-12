import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { sidebarConfig } from './sidebarConfig';

export const Sidebar = <E extends ElementType = 'aside'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('sidebar', sidebarConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
