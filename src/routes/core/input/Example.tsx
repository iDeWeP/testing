import { type ReactNode, useState, type ChangeEvent } from 'react';
import { Input } from '../../../core/components/Input/Input';
import type { InputProps } from '../../../core/components/Input/Input.types';

export const Example = (props: InputProps): ReactNode => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>): void =>
        setValue(event.target.value)
      }
      {...props}
    />
  );
};
