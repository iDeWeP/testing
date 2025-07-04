import { Main } from '../../../core/components/Main/Main';
import type { MainProps } from '../../../core/components/Main/Main.types';

export const Example = ({
  children = 'MAIN',
  ...restProps
}: MainProps<'main'>) => <Main {...restProps}>{children}</Main>;
