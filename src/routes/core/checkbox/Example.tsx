import { useState } from 'react';
import { Checkbox } from '../../../core/components/Checkbox/Checkbox';
import type { CheckboxProps } from '../../../core/components/Checkbox/Checkbox.types';

export const Example = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      checked={isChecked}
      onChange={() => setIsChecked((checked) => !checked)}
      {...props}
    />
  );
};
