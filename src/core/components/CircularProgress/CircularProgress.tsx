import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCircularProgress } from '../UnstyledCircularProgress/UnstyledCircularProgress';
import type { CircularProgressProps } from './CircularProgress.types';
import { circularProgressConfig } from './circularProgressConfig';

export const CircularProgress = (props: CircularProgressProps) => {
  const mergedProps = useMergeProps('circularProgress', circularProgressConfig.props, props);

  return <UnstyledCircularProgress {...mergedProps} />;
};
