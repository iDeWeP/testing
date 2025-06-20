import type { Cursor } from '../../../core/types';

export const getAnchorDimensions = (
  anchor: HTMLElement,
  isPorted: boolean,
  isFollowingCursor?: boolean,
  cursor?: Cursor
) => {
  const dimensions = {
    x: anchor.getBoundingClientRect().x,
    y: anchor.getBoundingClientRect().y,
    cursorX: cursor?.x ?? 0,
    cursorY: cursor?.y ?? 0,
    top: anchor.offsetTop,
    left: anchor.offsetLeft,
    width: anchor.offsetWidth,
    height: anchor.offsetHeight
  };

  const portedX =
    (isFollowingCursor ? dimensions.cursorX : dimensions.x) +
    document.documentElement.scrollLeft;

  const portedY =
    (isFollowingCursor ? dimensions.cursorY : dimensions.y) +
    document.documentElement.scrollTop;

  const left = isFollowingCursor
    ? dimensions.left + dimensions.cursorX - dimensions.x
    : dimensions.left;

  const top = isFollowingCursor
    ? dimensions.top + dimensions.cursorY - dimensions.y
    : dimensions.top;

  const anchorDimensions = {
    left: isPorted ? portedX : left,
    top: isPorted ? portedY : top,
    x: isFollowingCursor ? dimensions.cursorX : dimensions.x,
    y: isFollowingCursor ? dimensions.cursorY : dimensions.y,
    width: isFollowingCursor ? 0 : dimensions.width,
    height: isFollowingCursor ? 0 : dimensions.height,
    offsetWidth: 0,
    offsetHeight: 0
  };

  anchorDimensions.offsetWidth = anchorDimensions.left + anchorDimensions.width;
  anchorDimensions.offsetHeight =
    anchorDimensions.top + anchorDimensions.height;

  return anchorDimensions;
};
