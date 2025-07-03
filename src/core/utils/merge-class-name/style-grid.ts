import { sharedStyles } from '../../config/shared-styles';
import { mergeClasses } from './merge-classes';

export const styleGrid = (className: string) =>
  mergeClasses(sharedStyles.display.grid, className);
