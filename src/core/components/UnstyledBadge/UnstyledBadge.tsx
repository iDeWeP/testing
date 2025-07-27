import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setInnerSize } from '../../utils/set-inner-size/set-inner-size';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { UnstyledBadgeProps } from './UnstyledBadge.types';
import { unstyledBadgeConfig } from './unstyledBadgeConfig';

export const UnstyledBadge = <E extends ElementType>(
  props: UnstyledBadgeProps<E>
): ReactNode => {
  const {
    max,
    showZero,
    placement: cornerPlacement,
    overlap,
    className,
    children,
    size: defaultSize,
    ...restProps
  } = mergeProps(unstyledBadgeConfig.props, props);

  const isZero = !showZero && +children === 0;
  const decorated = children && !isZero;

  const mergedClassName = mergeClassName('badge', className, {
    cornerPlacement,
    overlap,
    defaultSize,
    decorated
  });

  const count =
    !isNaN(children) && max !== undefined && +children > max
      ? `${max}+`
      : children;
  const node = isZero ? null : count;

  return (
    <UnstyledContainer
      size={setInnerSize(defaultSize)}
      scale={decorated ? 'circle' : 'none'}
      className={mergedClassName}
      {...restProps}
    >
      {node}
    </UnstyledContainer>
  );
};
