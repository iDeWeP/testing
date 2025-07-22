import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { LabelProps } from './Label.types';
import { labelConfig } from './labelConfig';

export const Label = <E extends ElementType>(
  props: LabelProps<E>
): ReactNode => {
  const { placement, className, label, children, ...restProps } = useMergeProps(
    'label',
    labelConfig.props,
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
