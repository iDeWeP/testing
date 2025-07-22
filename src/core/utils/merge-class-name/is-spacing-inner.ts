import type { Spacing } from '../../types';

export const isSpacingInner = (spacing: Spacing): boolean =>
  spacing.includes('-');
