import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleGroup = (
  className: string,
  { orientation = 'row', groupGap = 'unset' }: Classes
): ClassName => {
  const isInner = groupGap.startsWith('-');
  const gapType = isInner ? orientation : 'all';
  const spacing = isInner ? groupGap.slice(1) : groupGap;

  return mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    systemStyles.gap[gapType][spacing],
    className
  );
};
