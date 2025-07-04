import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleTitle = (className: string, { font = 'md' }: Classes) =>
  mergeClasses(systemStyles.size.title[font], className);
