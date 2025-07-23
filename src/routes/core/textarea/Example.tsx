import { type ReactNode, useState, type ChangeEvent } from 'react';
import { Textarea } from '../../../core/components/Textarea/Textarea';
import type { TextareaProps } from '../../../core/components/Textarea/Textarea.types';

export const Example = (props: TextareaProps): ReactNode => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
      {...props}
    />
  );
};
