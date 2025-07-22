import { type ReactNode, useState } from 'react';
import { Checkbox } from '../../../core/components/Checkbox/Checkbox';
import type { CheckboxProps } from '../../../core/components/Checkbox/Checkbox.types';

export const Example = (props: CheckboxProps): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      checked={isChecked}
      onChange={(): void => setIsChecked((checked): boolean => !checked)}
      {...props}
    />
  );
};
