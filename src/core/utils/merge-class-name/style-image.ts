import { sharedStyles } from '../../config/shared-styles';
import { mergeClasses } from './merge-classes';

export const styleImage = (className: string) =>
  mergeClasses(sharedStyles.image.default, className);
