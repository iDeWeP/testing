import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { FabProps } from './Fab.types';
import { fabConfig } from './fabConfig';

export const Fab = <E extends ElementType>(props: FabProps<E>) => {
  const {
    position: defaultPosition,
    placement: cornerPlacement,
    className,
    ...restProps
  } = useMergeProps('fab', fabConfig.props, props);

  const mergedClassName = mergeClassName('fab', className, {
    defaultPosition,
    cornerPlacement
  });

  return (
    <UnstyledButton
      className={mergedClassName}
      {...restProps}
    />
  );
};
