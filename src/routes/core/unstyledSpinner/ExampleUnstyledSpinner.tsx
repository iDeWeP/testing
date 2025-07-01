import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';
import type { UnstyledSpinnerProps } from '../../../core/components/UnstyledSpinner/UnstyledSpinner.types';

export const ExampleUnstyledSpinner = (props: UnstyledSpinnerProps) => (
  <UnstyledSpinner
    variant="text"
    {...props}
  />
);
