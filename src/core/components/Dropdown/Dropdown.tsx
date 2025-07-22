import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledDropdown } from '../UnstyledDropdown/UnstyledDropdown';
import type { DropdownProps } from './Dropdown.types';
import { dropdownConfig } from './dropdownConfig';

export const Dropdown = <E extends ElementType>(
  props: DropdownProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('dropdown', dropdownConfig.props, props);

  return <UnstyledDropdown {...mergedProps} />;
};
