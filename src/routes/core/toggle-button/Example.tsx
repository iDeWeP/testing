import { type ReactNode, useState, useCallback } from 'react';
import { ToggleButton } from '../../../core/components/ToggleButton/ToggleButton';
import type { ToggleButtonProps } from '../../../core/components/ToggleButton/ToggleButton.types';

export const Example = ({
  children = 'TOGGLE-BUTTON',
  ...restProps
}: ToggleButtonProps<'button'>): ReactNode => {
  const [checked, setChecked] = useState(false);

  const handleClick = useCallback(
    (): void => setChecked((checked): boolean => !checked),
    []
  );

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
