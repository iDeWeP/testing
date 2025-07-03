import { sharedStyles } from '../../config/shared-styles';
import { mergeClasses } from './merge-classes';

export const styleFlex = (className: string) =>
  mergeClasses(sharedStyles.display.flex, className);
