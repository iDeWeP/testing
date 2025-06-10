const getRootFontSize = () => {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  const rootFontSize = parseFloat(fontSize);

  return isNaN(rootFontSize) ? 16 : rootFontSize;
};

export const convertRemToPixels = (rem: number) => rem * getRootFontSize();
