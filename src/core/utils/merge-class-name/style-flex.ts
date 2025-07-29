import { sharedStyle } from '../../config/shared-style';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleFlex = (className: string): ClassName =>
  mergeClasses(sharedStyle.display.flex, className);
