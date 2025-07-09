import { sharedStyles } from '../../config/shared-styles';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputClearance = (className: string) =>
  mergeClasses(sharedStyles.inputClearance.default, className);
