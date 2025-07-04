import { sharedStyles } from '../../config/shared-styles';
import { mergeClasses } from './merge-classes';

export const styleStack = (className: string) =>
  mergeClasses(sharedStyles.stack, className);
