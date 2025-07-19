import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledLinearProgress } from '../UnstyledLinearProgress/UnstyledLinearProgress';
import type { LinearProgressProps } from './LinearProgress.types';
import { linearProgressConfig } from './linearProgressConfig';

export const LinearProgress = (props: LinearProgressProps) => {
  const mergedProps = useMergeProps(
    'linearProgress',
    linearProgressConfig.props,
    props
  );

  return <UnstyledLinearProgress {...mergedProps} />;
};
