import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleAvatar = (
  className: string,
  { theme = 'light', ring = 'unset' }: Classes
) =>
  mergeClasses(
    ring !== 'unset' && sharedStyles.ring.normal,
    systemStyles.color.normal.ring[theme][getColor('solid', ring).bg],
    className
  );
