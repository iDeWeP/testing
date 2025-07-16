import { Fab } from '../../../core/components/Fab/Fab';
import type { FabProps } from '../../../core/components/Fab/Fab.types';

export const Example = ({
  children = 'FAB',
  ...restProps
}: FabProps<'button'>) => <Fab {...restProps}>{children}</Fab>;
