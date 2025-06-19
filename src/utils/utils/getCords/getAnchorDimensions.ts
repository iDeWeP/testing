import type { RefObject } from 'react';
import type { Cursor } from '../../../core/types';

export type AnchorDimensions = {
  x: number;
  y: number;
  viewX: number;
  viewY: number;
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
};

export const getAnchorDimensions = (
  anchorRef: RefObject<HTMLElement | null>,
  isPorted: boolean,
  isFollowingCursor?: boolean,
  cursor?: Cursor
) => {
  const anchor = {
    x: anchorRef.current?.getBoundingClientRect().x ?? 0,
    y: anchorRef.current?.getBoundingClientRect().y ?? 0,
    offsetTop: anchorRef.current?.offsetTop ?? 0,
    offsetLeft: anchorRef.current?.offsetLeft ?? 0,
    offsetWidth: anchorRef.current?.offsetWidth ?? 0,
    offsetHeight: anchorRef.current?.offsetHeight ?? 0
  };
  const anchorDimensions = {
    x: 0,
    y: 0,
    viewX: 0,
    viewY: 0,
    width: 0,
    height: 0,
    offsetWidth: 0,
    offsetHeight: 0
  };

  if (isFollowingCursor) {
    anchorDimensions.viewX = cursor?.x ?? 0;
    anchorDimensions.viewY = cursor?.y ?? 0;
    anchorDimensions.x = isPorted
      ? anchorDimensions.viewX + document.documentElement.scrollLeft
      : anchor.offsetLeft + anchorDimensions.viewX - anchor.x;
    anchorDimensions.y = isPorted
      ? anchorDimensions.viewY + document.documentElement.scrollTop
      : anchor.offsetTop + anchorDimensions.viewY - anchor.y;
  } else {
    anchorDimensions.viewX = anchor.x;
    anchorDimensions.viewY = anchor.y;
    anchorDimensions.x = isPorted
      ? anchorDimensions.viewX + document.documentElement.scrollLeft
      : anchor.offsetLeft;
    anchorDimensions.y = isPorted
      ? anchorDimensions.viewY + document.documentElement.scrollTop
      : anchor.offsetTop;
    anchorDimensions.width = anchor.offsetWidth;
    anchorDimensions.height = anchor.offsetHeight;
  }

  // Update anchor offset sizes
  anchorDimensions.offsetWidth = anchorDimensions.x + anchorDimensions.width;
  anchorDimensions.offsetHeight = anchorDimensions.y + anchorDimensions.height;

  return anchorDimensions;
};
