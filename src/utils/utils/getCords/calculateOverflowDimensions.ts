import type { AnchorDimensions, ElDimensions } from './getCords.types';
import type { ViewDimensions } from './getViewDimensions';

export const calculateOverflowDimensions = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions
) => ({
  horizontal: {
    start: anchor.x + el.width,
    end: anchor.x + anchor.width - el.width,
    viewStart: anchor.x + anchor.width,
    viewEnd: view.width - anchor.x,
    anchorStart: anchor.x,
    anchorEnd: anchor.x + anchor.width,
    centerStart: anchor.x + anchor.width / 2 - el.width / 2,
    centerEnd: anchor.x + anchor.width / 2 + el.width / 2
  },
  vertical: {
    start: anchor.y + el.height,
    end: anchor.y + anchor.height - el.height,
    viewStart: anchor.y + anchor.height,
    viewEnd: view.height - anchor.y,
    anchorStart: anchor.y,
    anchorEnd: anchor.y + anchor.height,
    centerStart: anchor.y + anchor.height / 2 - el.height / 2,
    centerEnd: anchor.y + anchor.height / 2 + el.height / 2
  },
  top: anchor.y - el.offsetHeight,
  bottom: anchor.y + anchor.height + el.offsetHeight,
  left: anchor.x - el.offsetWidth,
  right: anchor.x + anchor.width + el.offsetWidth
});
