import type { AnchorDimensions } from './getAnchorDimensions';
import type { ElDimensions } from './getElDimensions';
import type { ViewDimensions } from './getViewDimensions';

export const calculateOverflowDimensions = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions
) => ({
  horizontal: {
    start: anchor.viewX + el.width,
    end: anchor.viewX + anchor.width - el.width,
    viewStart: anchor.viewX + anchor.width,
    viewEnd: view.width - anchor.viewX,
    anchorStart: anchor.viewX,
    anchorEnd: anchor.viewX + anchor.width,
    centerStart: anchor.viewX + anchor.width / 2 - el.width / 2,
    centerEnd: anchor.viewX + anchor.width / 2 + el.width / 2
  },
  vertical: {
    start: anchor.viewY + el.height,
    end: anchor.viewY + anchor.height - el.height,
    viewStart: anchor.viewY + anchor.height,
    viewEnd: view.height - anchor.viewY,
    anchorStart: anchor.viewY,
    anchorEnd: anchor.viewY + anchor.height,
    centerStart: anchor.viewY + anchor.height / 2 - el.height / 2,
    centerEnd: anchor.viewY + anchor.height / 2 + el.height / 2
  },
  top: anchor.viewY - el.offsetHeight,
  bottom: anchor.viewY + anchor.height + el.offsetHeight,
  left: anchor.viewX - el.offsetWidth,
  right: anchor.viewX + anchor.width + el.offsetWidth
});
