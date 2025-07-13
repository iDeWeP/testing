import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { SpinnerProps } from './Spinner.types';
import { spinnerConfig } from './spinnerConfig';

export const Spinner = (props: SpinnerProps) => {
  const mergedProps = useMergeProps('spinner', spinnerConfig.props, props);

  return <UnstyledSpinner {...mergedProps} />;
};
