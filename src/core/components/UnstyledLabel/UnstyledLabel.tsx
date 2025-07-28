import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledLabelProps } from './UnstyledLabel.types';
import { unstyledLabelConfig } from './unstyledLabelConfig';

export const UnstyledLabel = <E extends ElementType>(
  props: UnstyledLabelProps<E>
): ReactNode => {
  const { placement, className, label, children, ...restProps } = mergeProps(
    unstyledLabelConfig.props,
    props
  );

  const mergedClassName = mergeClassName('label', className, {
    orientation: placement === 'top' || placement === 'bottom' ? 'col' : 'row'
  });

  const isStart = placement === 'top' || placement === 'left';

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    >
      {isStart ? label : children}
      {isStart ? children : label}
    </UnstyledBox>
  );
};
