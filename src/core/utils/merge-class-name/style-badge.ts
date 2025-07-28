import { unstyledBadgeConfig } from '../../components/UnstyledBadge/unstyledBadgeConfig';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleBadge = (
  className: string,
  {
    cornerPlacement = 'top-right',
    overlap = 'square',
    defaultSize = 'md',
    decorated = false
  }: Classes
): ClassName =>
  mergeClasses(
    unstyledBadgeConfig.styles.root.default,
    unstyledBadgeConfig.styles.root.placement[cornerPlacement][overlap],
    unstyledBadgeConfig.styles.root.transform[cornerPlacement],
    unstyledBadgeConfig.styles.root.size[decorated ? 'normal' : 'empty'][
      defaultSize
    ],
    className
  );
