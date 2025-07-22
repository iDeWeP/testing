import type { ViewDimension } from './cords.types';

export const getViewDimension = (threshold: number): ViewDimension => ({
  top: threshold,
  bottom: document.documentElement.clientHeight - threshold,
  left: threshold,
  right: document.documentElement.clientWidth - threshold
});
