import type { ReactNode } from 'react';

export const getSpacingType = (decorated: ReactNode) =>
  decorated ? 'decorated' : 'default';
