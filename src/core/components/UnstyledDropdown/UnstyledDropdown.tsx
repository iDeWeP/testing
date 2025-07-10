import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledPaperProps } from './UnstyledDropdown.types';
import { unstyledPaperConfig } from './unstyledDropdownConfig';

export const UnstyledPaper = <E extends ElementType>(
  props: UnstyledPaperProps<E>
) => {
  const {
    orientation,
    size: cardSize,
    className,
    ...restProps
  } = mergeProps(unstyledPaperConfig.props, props);

  const mergedClassName = mergeClassName('unstyledCard', className, {
    orientation,
    cardSize
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
