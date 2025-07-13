import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { getInnerSize } from '../../utils/merge-class-name/spacing';
import { UnstyledContainer } from '../UnstyledContainer/UnstyledContainer';
import type { BadgeProps } from './Badge.types';
import { badgeConfig } from './badgeConfig';

export const Badge = <E extends ElementType>(props: BadgeProps<E>) => {
  const {
    max,
    showZero,
    placement: cornerPlacement,
    overlap,
    ring,
    className,
    children,
    size: defaultSize,
    ...restProps
  } = useMergeProps('badge', badgeConfig.props, props);

  const theme = useTheme();

  const isZero = !showZero && +children === 0;
  const empty = !children || isZero;

  const mergedClassName = mergeClassName('badge', className, {
    theme,
    cornerPlacement,
    overlap,
    defaultSize,
    ring,
    empty
  });

  const count =
    !isNaN(children) && max !== undefined && +children > max
      ? `${max}+`
      : children;
  const node = isZero ? null : count;

  return (
    <UnstyledContainer
      size={getInnerSize(defaultSize)}
      scale={empty ? 'none' : 'circle'}
      className={mergedClassName}
      {...restProps}
    >
      {node}
    </UnstyledContainer>
  );
};
