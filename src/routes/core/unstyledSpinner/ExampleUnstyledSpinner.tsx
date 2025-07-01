import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';
import type { UnstyledSpinnerProps } from '../../../core/components/UnstyledSpinner/UnstyledSpinner.types';

type Props = {
  light?: boolean;
} & UnstyledSpinnerProps;

export const ExampleUnstyledSpinner = ({ light, ...restProps }: Props) => (
  <UnstyledSpinner
    variant={light ? 'light' : 'text'}
    {...restProps}
  />
);
