import { type ReactNode, useState, useCallback, type ChangeEvent } from 'react';
import { Input } from '../../../core/components/Input/Input';
import type { InputProps } from '../../../core/components/Input/Input.types';

export const Example = (props: InputProps): ReactNode => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void =>
      setValue(event.target.value),
    []
  );

  return (
    <Input
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
