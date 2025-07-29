import { sharedStyle } from '../../config/shared-style';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleGrid = (className: string): ClassName =>
  mergeClasses(sharedStyle.display.grid, className);
