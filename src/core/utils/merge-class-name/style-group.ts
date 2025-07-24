import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleGroup = (
  className: string,
  { orientation = 'row', groupGap = 'unset' }: Classes
): ClassName => {
  const isInner = groupGap.startsWith('-');
  const gapType = isInner ? orientation : 'all';
  const gap = isInner ? groupGap.slice(1) : groupGap;

  return mergeClasses(
    sharedStyle.display.flex,
    sharedStyle.direction[orientation],
    systemStyle.gap[gapType][gap],
    className
  );
};
