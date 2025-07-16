import { useState, useCallback } from 'react';
import { ToggleButton } from '../../../core/components/ToggleButton/ToggleButton';
import type { ToggleButtonProps } from '../../../core/components/ToggleButton/ToggleButton.types';

export const Example = ({
  children = 'TOGGLE-BUTTON',
  ...restProps
}: ToggleButtonProps<'button'>) => {
  const [checked, setChecked] = useState(false);

  const handleClick = useCallback(() => setChecked((checked) => !checked), []);

  return (
    <ToggleButton
      checked={checked}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </ToggleButton>
  );
};
