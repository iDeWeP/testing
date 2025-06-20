export const getElDimensions = (elDimensions: DOMRect, offset: number) => {
  const width = elDimensions.width;
  const height = elDimensions.height;

  return {
    width,
    height,
    offsetWidth: width + offset,
    offsetHeight: height + offset
  };
};
