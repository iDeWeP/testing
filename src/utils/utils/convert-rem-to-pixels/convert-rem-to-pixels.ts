export const convertRemToPixels = (rem: number): number => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  const rootFontSize = parseFloat(fontSize);
  const size = isNaN(rootFontSize) ? 16 : rootFontSize;

  return rem * size;
};
