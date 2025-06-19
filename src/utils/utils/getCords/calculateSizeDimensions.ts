import type { AnchorDimensions } from './getAnchorDimensions';
import type { ElDimensions } from './getElDimensions';
import type { ViewDimensions } from './getViewDimensions';

export const calculateSizeDimensions = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  offset: number
) => ({
  horizontal: {
    start: anchor.x,
    end: anchor.offsetWidth - el.width,
    center: anchor.x + anchor.width / 2 - el.width / 2,
    viewStart: anchor.x - anchor.viewX,
    viewEnd: anchor.x + view.width - anchor.viewX - el.width
  },
  vertical: {
    start: anchor.y,
    end: anchor.offsetHeight - el.height,
    center: anchor.y + anchor.height / 2 - el.height / 2,
    viewStart: anchor.y - anchor.viewY,
    viewEnd: anchor.y + view.height - anchor.viewY - el.height
  },
  top: anchor.y - el.offsetHeight,
  bottom: anchor.offsetHeight + offset,
  left: anchor.x - el.offsetWidth,
  right: anchor.offsetWidth + offset
});
