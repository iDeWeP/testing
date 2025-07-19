import { useState } from 'react';
import { UnstyledCheckbox } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox';
import type { UnstyledCheckboxProps } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox.types';

type Props = {
  clear?: boolean;
} & UnstyledCheckboxProps;

export const Example = ({ clear, ...restProps }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <UnstyledCheckbox
      checked={isChecked}
      color={clear ? 'unset' : 'primary'}
      ripple={clear ? 'none' : 'normal'}
      onChange={() => setIsChecked((checked) => !checked)}
      {...restProps}
    />
  );
};
