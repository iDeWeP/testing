import { type ReactNode, useState, useCallback } from 'react';
import { Checkbox } from '../../../core/components/Checkbox/Checkbox';
import type { CheckboxProps } from '../../../core/components/Checkbox/Checkbox.types';

export const Example = (props: CheckboxProps): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (): void => setIsChecked((checked): boolean => !checked),
    []
  );

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleChange}
      {...props}
    />
  );
};
