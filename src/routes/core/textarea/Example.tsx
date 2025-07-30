import { type ReactNode, useState, useCallback, type ChangeEvent } from 'react';
import { Textarea } from '../../../core/components/Textarea/Textarea';
import type { TextareaProps } from '../../../core/components/Textarea/Textarea.types';

export const Example = (props: TextareaProps): ReactNode => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void =>
      setValue(event.target.value),
    []
  );

  return (
    <Textarea
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
