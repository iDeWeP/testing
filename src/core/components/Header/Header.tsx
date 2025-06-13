import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { HeaderProps } from './Header.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType = 'header'>(
  props: HeaderProps<E>
) => {
  const mergedProps = useMergeProps('header', headerConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
