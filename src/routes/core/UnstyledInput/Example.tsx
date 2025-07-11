import { useState, type ChangeEvent } from 'react';
import { UnstyledInput } from '../../../core/components/UnstyledInput/UnstyledInput';
import type { UnstyledInputProps } from '../../../core/components/UnstyledInput/UnstyledInput.types';

type Props = {
  clear?: boolean;
} & UnstyledInputProps<'textarea'>;

export const Example = ({ clear, ...restProps }: Props) => {
  const [value, setValue] = useState('');

  return (
    <UnstyledInput
      value={value}
      variant="light"
      color={clear ? 'unset' : 'primary'}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(event.target.value)
      }
      {...restProps}
    />
  );
};
