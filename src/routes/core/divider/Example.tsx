import type { ReactNode } from 'react';
import { Divider } from '../../../core/components/Divider/Divider';
import type { DividerProps } from '../../../core/components/Divider/Divider.types';

export const Example = (props: DividerProps<'span'>): ReactNode => (
  <Divider {...props} />
);
