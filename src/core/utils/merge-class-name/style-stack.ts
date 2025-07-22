import { sharedStyles } from '../../config/shared-styles';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleStack = (className: string): ClassName =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction.col,
    className
  );
