import type { ReactNode } from 'react';
import { Fab } from '../../../core/components/Fab/Fab';
import type { FabProps } from '../../../core/components/Fab/Fab.types';

export const Example = ({
  children = 'FAB',
  ...restProps
}: FabProps<'button'>): ReactNode => <Fab {...restProps}>{children}</Fab>;
