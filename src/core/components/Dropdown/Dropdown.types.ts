import type { ElementType } from 'react';
import type {
  UnstyledDropdownConfigProps,
  UnstyledDropdownProps
} from '../UnstyledDropdown/UnstyledDropdown.types';

export type DropdownConfigProps = UnstyledDropdownConfigProps;

export type DropdownProps<E extends ElementType> = UnstyledDropdownProps<E>;
