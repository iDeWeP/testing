import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType = 'header'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('header', headerConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
