import type { ReactNode } from 'react';
import { Main } from '../../../core/components/Main/Main';
import type { MainProps } from '../../../core/components/Main/Main.types';

export const Example = ({
  children = 'MAIN',
  ...restProps
}: MainProps<'main'>): ReactNode => <Main {...restProps}>{children}</Main>;
