import type { ReactNode } from 'react';
import { Header } from '../../../core/components/Header/Header';
import type { HeaderProps } from '../../../core/components/Header/Header.types';

export const Example = ({
  children = 'HEADER',
  ...restProps
}: HeaderProps<'header'>): ReactNode => (
  <Header {...restProps}>{children}</Header>
);
