import type { ReactNode } from 'react';
import { UnstyledDropdown } from '../../../core/components/UnstyledDropdown/UnstyledDropdown';
import type { UnstyledDropdownProps } from '../../../core/components/UnstyledDropdown/UnstyledDropdown.types';

type Props = {
  clear?: boolean;
} & UnstyledDropdownProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-DROPDOWN',
  ...restProps
}: Props): ReactNode => (
  <UnstyledDropdown
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledDropdown>
);
