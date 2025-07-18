import { UnstyledLinearProgress } from '../../../core/components/UnstyledLinearProgress/UnstyledLinearProgress';
import type { UnstyledLinearProgressProps } from '../../../core/components/UnstyledLinearProgress/UnstyledLinearProgress.types';

type Props = {
  clear?: boolean;
} & UnstyledLinearProgressProps;

export const Example = ({ clear, ...restProps }: Props) => (
  <UnstyledLinearProgress
    value={clear ? 0 : 75}
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  />
);
