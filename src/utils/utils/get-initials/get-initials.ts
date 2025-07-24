import type { ReactNode } from 'react';

export const getInitials = (
  children?: ReactNode,
  isEnabled: boolean = true
): ReactNode =>
  !isEnabled || typeof children !== 'string'
    ? children
    : children
        .trim()
        .split(/\s+/)
        .map((word): string => word[0].toUpperCase())
        .join('');
