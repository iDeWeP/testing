import type { ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledInput } from '../UnstyledInput/UnstyledInput';
import type { InputProps } from './Input.types';
import { inputConfig } from './InputConfig';

export const Input = (props: InputProps): ReactNode => {
  const mergedProps = useMergeProps('input', inputConfig.props, props);

  return <UnstyledInput {...mergedProps} />;
};
