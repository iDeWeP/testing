export const getViewDimensions = (threshold: number) => ({
  top: threshold,
  bottom: document.documentElement.clientHeight - threshold,
  left: threshold,
  right: document.documentElement.clientWidth - threshold
});
