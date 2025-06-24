import { useCallback, useState, type ChangeEvent } from 'react';
import { UnstyledInput } from '../../../core/components/UnstyledInput/UnstyledInput';
import type { UnstyledInputProps } from '../../../core/components/UnstyledInput/UnstyledInput.types';

type Props = {
  name: string;
} & UnstyledInputProps;

export const ExampleInput = ({ ...restProps }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );

  return (
    <UnstyledInput
      value={value}
      onChange={handleChange}
      {...restProps}
    />
  );
};
