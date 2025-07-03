import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';
import type { UnstyledSpinnerProps } from '../../../core/components/UnstyledSpinner/UnstyledSpinner.types';

export const Example = (props: UnstyledSpinnerProps) => (
  <UnstyledSpinner
    variant="light"
    color="primary"
    {...props}
  />
);
