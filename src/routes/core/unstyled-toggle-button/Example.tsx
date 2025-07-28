import { type ReactNode, useState, useCallback } from 'react';
import { UnstyledToggleButton } from '../../../core/components/UnstyledToggleButton/UnstyledToggleButton';
import type { UnstyledToggleButtonProps } from '../../../core/components/UnstyledToggleButton/UnstyledToggleButton.types';

type Props = {
  clear?: boolean;
} & UnstyledToggleButtonProps<'button'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-TOGGLE-BUTTON',
  ...restProps
}: Props): ReactNode => {
  const [checked, setChecked] = useState(false);

  const handleClick = useCallback(
    (): void => setChecked((checked): boolean => !checked),
    []
  );

  return (
    <UnstyledToggleButton
      checked={checked}
      onClick={handleClick}
      color={clear ? 'unset' : 'primary'}
      ripple={clear ? 'none' : 'default'}
      {...restProps}
    >
      {children}
    </UnstyledToggleButton>
  );
};
