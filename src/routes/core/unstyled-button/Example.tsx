import type { ReactNode } from 'react';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import type { UnstyledButtonProps } from '../../../core/components/UnstyledButton/UnstyledButton.types';

type Props = {
  clear?: boolean;
} & UnstyledButtonProps<'button'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-BUTTON',
  ...restProps
}: Props): ReactNode => (
  <UnstyledButton
    color={clear ? 'unset' : 'primary'}
    ripple={clear ? 'none' : 'default'}
    {...restProps}
  >
    {children}
  </UnstyledButton>
);
