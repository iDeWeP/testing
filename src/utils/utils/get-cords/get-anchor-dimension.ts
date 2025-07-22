import type { Cursor } from '../../../core/types';
import type { AnchorDimension } from './cords.types';

export const getAnchorDimension = (
  anchor: HTMLElement,
  isPorted: boolean,
  cursor?: Cursor
): AnchorDimension => {
  const dimension = {
    top: anchor.offsetTop,
    left: anchor.offsetLeft,
    x: anchor.getBoundingClientRect().x,
    y: anchor.getBoundingClientRect().y,
    cursorX: cursor?.x ?? 0,
    cursorY: cursor?.y ?? 0,
    width: anchor.offsetWidth,
    height: anchor.offsetHeight
  };

  const portedX =
    (cursor ? dimension.cursorX : dimension.x) +
    document.documentElement.scrollLeft;

  const portedY =
    (cursor ? dimension.cursorY : dimension.y) +
    document.documentElement.scrollTop;

  const top = cursor
    ? dimension.top + dimension.cursorY - dimension.y
    : dimension.top;

  const left = cursor
    ? dimension.left + dimension.cursorX - dimension.x
    : dimension.left;

  const anchorDimension = {
    top: isPorted ? portedY : top,
    left: isPorted ? portedX : left,
    x: cursor ? dimension.cursorX : dimension.x,
    y: cursor ? dimension.cursorY : dimension.y,
    width: cursor ? 0 : dimension.width,
    height: cursor ? 0 : dimension.height,
    offsetWidth: 0,
    offsetHeight: 0
  };

  anchorDimension.offsetWidth = anchorDimension.left + anchorDimension.width;
  anchorDimension.offsetHeight = anchorDimension.top + anchorDimension.height;

  return anchorDimension;
};
