import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledDropdownProps } from './UnstyledDropdown.types';
import { unstyledDropdownConfig } from './unstyledDropdownConfig';

export const UnstyledDropdown = <E extends ElementType>(
  props: UnstyledDropdownProps<E>
) => {
  const { orientation, className, ...restProps } = mergeProps(
    unstyledDropdownConfig.props,
    props
  );

  const mergedClassName = mergeClassName('card', className, {
    orientation
  });

  return (
    <UnstyledBox
      margin="unset"
      m="unset"
      mx="unset"
      my="unset"
      mt="unset"
      mb="unset"
      ml="unset"
      mr="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
