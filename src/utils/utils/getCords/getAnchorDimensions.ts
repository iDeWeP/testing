import type { RefObject } from 'react';
import type { Cursor } from '../../../core/types';

export const getAnchorDimensions = (
  anchorRef: RefObject<HTMLElement | null>,
  isPorted: boolean,
  isFollowingCursor?: boolean,
  cursor?: Cursor
) => {
  const dimensions = {
    x: anchorRef.current?.getBoundingClientRect().x ?? 0,
    y: anchorRef.current?.getBoundingClientRect().y ?? 0,
    cursorX: cursor?.x ?? 0,
    cursorY: cursor?.y ?? 0,
    top: anchorRef.current?.offsetTop ?? 0,
    left: anchorRef.current?.offsetLeft ?? 0,
    width: anchorRef.current?.offsetWidth ?? 0,
    height: anchorRef.current?.offsetHeight ?? 0
  };

  const portedX =
    (isFollowingCursor ? dimensions.cursorX : dimensions.x) +
    document.documentElement.scrollLeft;

  const portedY =
    (isFollowingCursor ? dimensions.cursorX : dimensions.y) +
    document.documentElement.scrollTop;

  const left = isFollowingCursor
    ? dimensions.left + dimensions.cursorX - dimensions.x
    : dimensions.left;

  const top = isFollowingCursor
    ? dimensions.top + dimensions.cursorY - dimensions.y
    : dimensions.top;

  const anchor = {
    left: isPorted ? portedX : left,
    top: isPorted ? portedY : top,
    x: isFollowingCursor ? dimensions.cursorX : dimensions.x,
    y: isFollowingCursor ? dimensions.cursorY : dimensions.y,
    width: isFollowingCursor ? 0 : dimensions.width,
    height: isFollowingCursor ? 0 : dimensions.height,
    offsetWidth: 0,
    offsetHeight: 0
  };

  anchor.offsetWidth = anchor.left + anchor.width;
  anchor.offsetHeight = anchor.top + anchor.height;

  return anchor;
};
