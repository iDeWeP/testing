import type { ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledInput } from '../UnstyledInput/UnstyledInput';
import type { TextareaProps } from './Textarea.types';
import { textareaConfig } from './textareaConfig';

export const Textarea = (props: TextareaProps): ReactNode => {
  const mergedProps = useMergeProps('textarea', textareaConfig.props, props);

  return <UnstyledInput {...mergedProps} />;
};
