export const getOffset = (offset: number | string): string =>
  typeof offset === 'number' ? `${offset}px` : offset;
