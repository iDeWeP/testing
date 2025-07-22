import { sharedStyles } from '../../config/shared-styles';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleFlex = (className: string): ClassName =>
  mergeClasses(sharedStyles.display.flex, className);
