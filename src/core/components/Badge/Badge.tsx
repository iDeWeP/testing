import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setInnerSize } from '../../utils/set-inner-size/set-inner-size';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { BadgeProps } from './Badge.types';
import { badgeConfig } from './badgeConfig';

export const Badge = <E extends ElementType>(props: BadgeProps<E>) => {
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
  const empty = !children || isZero;

  const mergedClassName = mergeClassName('badge', className, {
    cornerPlacement,
    overlap,
    defaultSize,
    empty
  });

  const count =
    !isNaN(children) && max !== undefined && +children > max
      ? `${max}+`
      : children;
  const node = isZero ? null : count;

  return (
    <UnstyledContainer
      size={setInnerSize(defaultSize)}
      scale={empty ? 'none' : 'circle'}
      className={mergedClassName}
      {...restProps}
    >
      {node}
    </UnstyledContainer>
  );
};
