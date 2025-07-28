import { type ReactNode, useState, type ChangeEvent } from 'react';
import { UnstyledInput } from '../../../core/components/UnstyledInput/UnstyledInput';
import type { UnstyledInputProps } from '../../../core/components/UnstyledInput/UnstyledInput.types';

type Props = {
  clear?: boolean;
  children?: ReactNode;
} & UnstyledInputProps<'input'>;

export const Example = ({
  clear,
  children,
  ...restProps
}: Props): ReactNode => {
  const [value, setValue] = useState('');

  return (
    <UnstyledInput
      value={value}
      color={clear ? 'unset' : 'primary'}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
      label={children}
      {...restProps}
    />
  );
};
