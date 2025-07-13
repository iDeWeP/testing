import { badgeConfig } from '../../components/Badge/badgeConfig';
import { sharedStyles } from '../../config/shared-styles';
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
    defaultSize = 'md',
    ring = 'unset',
    empty = false
  }: Classes
) =>
  mergeClasses(
    badgeConfig.styles.root.default,
    badgeConfig.styles.root.placement[cornerPlacement][overlap],
    badgeConfig.styles.root.transform[cornerPlacement],
    badgeConfig.styles.root.size[empty ? 'empty' : 'normal'][defaultSize],
    ring !== 'unset' && sharedStyles.ring.normal,
    systemStyles.color.ring[theme][getColor('solid', ring).bgColor],
    className
  );
