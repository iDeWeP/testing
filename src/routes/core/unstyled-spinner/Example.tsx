import type { ReactNode } from 'react';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';
import type { UnstyledSpinnerProps } from '../../../core/components/UnstyledSpinner/UnstyledSpinner.types';

type Props = {
  clear?: boolean;
} & UnstyledSpinnerProps;

export const Example = ({ clear, ...restProps }: Props): ReactNode => (
  <UnstyledSpinner
    value={clear ? 0 : 75}
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  />
);
