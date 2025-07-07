import { useState } from 'react';
import { UnstyledCheckbox } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox';
import type { UnstyledCheckboxProps } from '../../../core/components/UnstyledCheckbox/UnstyledCheckbox.types';

export const Example = ({ ...restProps }: UnstyledCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <UnstyledCheckbox
      checked={isChecked}
      onChange={() => setIsChecked((checked) => !checked)}
      {...restProps}
    />
  );
};
