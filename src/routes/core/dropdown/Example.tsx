import { Dropdown } from '../../../core/components/Dropdown/Dropdown';
import type { DropdownProps } from '../../../core/components/Dropdown/Dropdown.types';

export const Example = ({
  children = 'DROPDOWN',
  ...restProps
}: DropdownProps<'div'>) => <Dropdown {...restProps}>{children}</Dropdown>;
