export type ViewDimensions = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export const getViewDimensions = () => ({
  top: document.documentElement.scrollTop,
  left: document.documentElement.scrollLeft,
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
});
