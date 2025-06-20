export const getOffset = (offset: number | string) =>
  typeof offset === 'number' ? `${offset}px` : offset;
