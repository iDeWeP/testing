import type { ReactNode } from 'react';
import { UnstyledCircularProgress } from '../../../core/components/UnstyledCircularProgress/UnstyledCircularProgress';
import type { UnstyledCircularProgressProps } from '../../../core/components/UnstyledCircularProgress/UnstyledCircularProgress.types';

type Props = {
  clear?: boolean;
} & UnstyledCircularProgressProps;

export const Example = ({ clear, ...restProps }: Props): ReactNode => (
  <UnstyledCircularProgress
    value={clear ? 0 : 75}
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  />
);
