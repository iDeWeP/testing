import { type ReactNode, useState, useCallback, type ChangeEvent } from 'react';
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

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void =>
      setValue(event.target.value),
    []
  );

  return (
    <UnstyledInput
      value={value}
      color={clear ? 'unset' : 'primary'}
      onChange={handleChange}
      label={children}
      {...restProps}
    />
  );
};
