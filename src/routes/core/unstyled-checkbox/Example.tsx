import { type ReactNode, useState } from 'react';
import { UnstyledCheckbox } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox';
import type { UnstyledCheckboxProps } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox.types';

type Props = {
  clear?: boolean;
} & UnstyledCheckboxProps;

export const Example = ({ clear, ...restProps }: Props): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <UnstyledCheckbox
      checked={isChecked}
      color={clear ? 'unset' : 'primary'}
      ripple={clear ? 'none' : 'default'}
      onChange={(): void => setIsChecked((checked): boolean => !checked)}
      {...restProps}
    />
  );
};
