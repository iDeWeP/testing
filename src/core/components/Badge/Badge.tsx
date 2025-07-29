import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBadge } from '../UnstyledBadge/UnstyledBadge';
import type { BadgeProps } from './Badge.types';
import { badgeConfig } from './badgeConfig';

export const Badge = <E extends ElementType>(
  props: BadgeProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('badge', badgeConfig.props, props);

  return <UnstyledBadge {...mergedProps} />;
};
