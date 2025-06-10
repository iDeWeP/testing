import type { ReactNode } from 'react';

export const getInitials = (
  children: ReactNode // CHECK TYPE !!!
) =>
  typeof children === 'string'
    ? children
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join('')
    : children;
