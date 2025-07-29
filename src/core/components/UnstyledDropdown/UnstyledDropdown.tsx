import type { ElementType, ReactNode } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { UnstyledDropdownProps } from './UnstyledDropdown.types';
import { unstyledDropdownConfig } from './unstyledDropdownConfig';

export const UnstyledDropdown = <E extends ElementType>(
  props: UnstyledDropdownProps<E>
): ReactNode => {
  const mergedProps = mergeProps(unstyledDropdownConfig.props, props);

  return (
    <UnstyledPaper
      margin="unset"
      m="unset"
      mx="unset"
      my="unset"
      mt="unset"
      mb="unset"
      ml="unset"
      mr="unset"
      {...mergedProps}
    />
  );
};
