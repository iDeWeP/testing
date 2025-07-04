import { Header } from '../../../core/components/Header/Header';
import type { HeaderProps } from '../../../core/components/Header/Header.types';

export const Example = ({
  children = 'HEADER',
  ...restProps
}: HeaderProps<'header'>) => <Header {...restProps}>{children}</Header>;
