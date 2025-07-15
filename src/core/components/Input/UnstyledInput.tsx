import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledInput } from '../UnstyledInput/UnstyledInput';
import type { InputProps } from './UnstyledInput.types';
import { inputConfig } from './unstyledInputConfig';

export const Input = (props: InputProps) => {
  const mergedProps = useMergeProps('input', inputConfig.props, props);

  return <UnstyledInput {...mergedProps} />;
};
