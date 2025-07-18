import { UnstyledLinearProgress } from '../../../core/components/UnstyledLinearProgress/UnstyledLinearProgress';
import type { UnstyledLinearProgressProps } from '../../../core/components/UnstyledLinearProgress/UnstyledLinearProgress.types';

type Props = {
  clear?: boolean;
} & UnstyledLinearProgressProps;

export const Example = ({
  clear,
  children = 'UNSTYLED-LINEAR-PROGRESS',
  ...restProps
}: Props) => (
  <UnstyledLinearProgress
    value={75}
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledLinearProgress>
);
