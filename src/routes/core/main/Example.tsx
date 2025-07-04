import { Main } from '../../../core/components/Main/Main';
import type { MainProps } from '../../../core/components/Main/Main.types';

export const Example = ({
  children = 'Main',
  ...restProps
}: MainProps<'div'>) => <Main {...restProps}>{children}</Main>;
