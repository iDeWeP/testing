import { badgeConfig } from '../../components/Badge/badgeConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleBadge = (
  className: string,
  {
    cornerPlacement = 'top-right',
    overlap = 'square',
    defaultSize = 'md',
    empty = false
  }: Classes
) =>
  mergeClasses(
    badgeConfig.styles.root.default,
    badgeConfig.styles.root.placement[cornerPlacement][overlap],
    badgeConfig.styles.root.transform[cornerPlacement],
    badgeConfig.styles.root.size[empty ? 'empty' : 'normal'][defaultSize],
    className
  );
