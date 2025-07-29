import { type ReactNode, useState, useCallback } from 'react';
import { UnstyledCheckbox } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox';
import type { UnstyledCheckboxProps } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox.types';

type Props = {
  clear?: boolean;
} & UnstyledCheckboxProps;

export const Example = ({ clear, ...restProps }: Props): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (): void => setIsChecked((checked): boolean => !checked),
    []
  );

  return (
    <UnstyledCheckbox
      checked={isChecked}
      color={clear ? 'unset' : 'primary'}
      ripple={clear ? 'none' : 'default'}
      onChange={handleChange}
      {...restProps}
    />
  );
};
