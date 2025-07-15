import { useState, type ChangeEvent } from 'react';
import { Textarea } from '../../../core/components/Textarea/Textarea';
import type { TextareaProps } from '../../../core/components/Textarea/Textarea.types';

export const Example = (props: TextareaProps) => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(event.target.value)
      }
      {...props}
    />
  );
};
