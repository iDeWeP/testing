import type { ReactNode } from 'react';
import { CircularProgress } from '../../../core/components/CircularProgress/CircularProgress';
import type { CircularProgressProps } from '../../../core/components/CircularProgress/CircularProgress.types';

export const Example = (props: CircularProgressProps): ReactNode => (
  <CircularProgress {...props} />
);
