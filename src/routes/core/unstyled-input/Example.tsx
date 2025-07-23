import { type ReactNode, useState, type ChangeEvent } from 'react';
import { UnstyledInput } from '../../../core/components/UnstyledInput/UnstyledInput';
import type { UnstyledInputProps } from '../../../core/components/UnstyledInput/UnstyledInput.types';

type Props = {
  clear?: boolean;
} & UnstyledInputProps<'input'>;

export const Example = ({ clear, ...restProps }: Props): ReactNode => {
  const [value, setValue] = useState('');

  return (
    <UnstyledInput
      value={value}
      color={clear ? 'unset' : 'primary'}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
      {...restProps}
    />
  );
};
