import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledGridProps } from './UnstyledGrid.types';
import { unstyledGridConfig } from './unstyledGridConfig';

export const UnstyledGrid = <E extends ElementType = 'div'>(
  props: UnstyledGridProps<E>
) => {
  const {
    flow,
    justifyContent,
    alignContent,
    justifyItems,
    alignItems,
    gap,
    colGap,
    rowGap,
    className,
    ...restProps
  } = mergeProps(unstyledGridConfig.props, props);

  const mergedClassName = mergeClassName('unstyledGrid', className, {
    flow,
    justifyContent,
    alignContent,
    justifyItems,
    alignItems,
    gap,
    colGap,
    rowGap
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
