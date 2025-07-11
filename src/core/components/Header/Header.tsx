import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { HeaderProps } from './Header.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType>(props: HeaderProps<E>) => {
  const mergedProps = useMergeProps('header', headerConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
