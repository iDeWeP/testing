import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
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
    size,
    ...restProps
  } = useMergeProps('badge', badgeConfig.props, props);

  const theme = useTheme();

  const isZero = children && +children === 0;

  const mergedClassName = mergeClassName('badge', className, {
    theme,
    cornerPlacement,
    overlap,
    size,
    ring,
    empty: !showZero && isZero ? false : !!children
  });

  const count = children && max && +children > max ? `${max}+` : children;

  return (
    <UnstyledContainer
      size={size}
      scale="inner-square"
      className={mergedClassName}
      {...restProps}
    >
      {!showZero && isZero ? null : count}
    </UnstyledContainer>
  );
};
