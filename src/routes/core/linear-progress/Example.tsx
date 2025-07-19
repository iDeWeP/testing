import { LinearProgress } from '../../../core/components/LinearProgress/LinearProgress';
import type { LinearProgressProps } from '../../../core/components/LinearProgress/LinearProgress.types';

export const Example = (props: LinearProgressProps) => (
  <LinearProgress
    value={75}
    {...props}
  />
);
