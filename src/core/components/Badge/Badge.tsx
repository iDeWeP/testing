import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setInnerSize } from '../../utils/set-inner-size/set-inner-size';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { BadgeProps } from './Badge.types';
import { badgeConfig } from './badgeConfig';

export const Badge = <E extends ElementType>(
  props: BadgeProps<E>
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
  } = useMergeProps('badge', badgeConfig.props, props);

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
      scale={decorated ? 'circle' : 'default'}
      className={mergedClassName}
      {...restProps}
    >
      {node}
    </UnstyledContainer>
  );
};
