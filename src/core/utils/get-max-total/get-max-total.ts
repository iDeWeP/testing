import type { ReactNode } from 'react';

export const getMaxTotal = (
  surplus: boolean,
  children?: ReactNode,
  max?: number,
  total?: number
) => {
  if (!children || !Array.isArray(children)) {
    return { nodes: children, count: 0 };
  }

  const maxCount = max && children.length > max ? children.length - max : 0;
  const totalCount = total ? total - children.length : 0;
  const count = max && total && maxCount ? total - max : 0;

  return {
    nodes: max
      ? children.slice(0, surplus && !totalCount ? max - 1 : max)
      : children,
    count:
      count || totalCount || (surplus && maxCount ? maxCount + 1 : maxCount)
  };
};
