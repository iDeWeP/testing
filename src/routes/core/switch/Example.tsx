import { type ReactNode, useState, useCallback } from 'react';
import { Switch } from '../../../core/components/Switch/Switch';
import type { SwitchProps } from '../../../core/components/Switch/Switch.types';

export const Example = (props: SwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (): void => setIsChecked((checked): boolean => !checked),
    []
  );

  return (
    <Switch
      checked={isChecked}
      onChange={handleChange}
      {...props}
    />
  );
};
