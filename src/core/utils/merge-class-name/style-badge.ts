import { badgeConfig } from '../../components/Badge/badgeConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleBadge = (
  className: string,
  {
    theme = 'light',
    cornerPlacement = 'top-right',
    overlap = 'square',
    size = 'md',
    ring = 'unset',
    empty = false
  }: Classes
) =>
  mergeClasses(
    badgeConfig.styles.root.placement[cornerPlacement][overlap],
    badgeConfig.styles.root.transform[cornerPlacement],
    badgeConfig.styles.root.size[empty ? 'empty' : 'normal'][size],
    systemStyles.color.ring[theme][getColor('solid', ring).bgColor],
    className
  );
