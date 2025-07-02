import type { ReactNode } from 'react';

export const getInitials = (children: ReactNode) =>
  typeof children !== 'string'
    ? children
    : children
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join('');
