import type { ReactNode } from 'react';
import { Spinner } from '../../../core/components/Spinner/Spinner';
import type { SpinnerProps } from '../../../core/components/Spinner/Spinner.types';

export const Example = (props: SpinnerProps): ReactNode => (
  <Spinner {...props} />
);
