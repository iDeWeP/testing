import type { ReactNode } from 'react';

// CHECK TYPES !!!
export const getInitials = (children: ReactNode) =>
  typeof children === 'string'
    ? children
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join('')
    : children;
