import type {
  AnchorDimensions,
  ElDimensions,
  ViewDimensions
} from './cords.types';

export const calculateSizeDimensions = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  offset: number
) => ({
  horizontal: {
    start: anchor.left,
    end: anchor.offsetWidth - el.width,
    center: anchor.left + anchor.width / 2 - el.width / 2,
    viewStart: anchor.left - anchor.x,
    viewEnd: anchor.left + view.width - anchor.x - el.width
  },
  vertical: {
    start: anchor.top,
    end: anchor.offsetHeight - el.height,
    center: anchor.top + anchor.height / 2 - el.height / 2,
    viewStart: anchor.top - anchor.y,
    viewEnd: anchor.top + view.height - anchor.y - el.height
  },
  top: anchor.top - el.offsetHeight,
  bottom: anchor.offsetHeight + offset,
  left: anchor.left - el.offsetWidth,
  right: anchor.offsetWidth + offset
});
