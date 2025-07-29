import { sharedStyle } from '../../config/shared-style';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleStack = (className: string): ClassName =>
  mergeClasses(sharedStyle.display.flex, sharedStyle.direction.col, className);
