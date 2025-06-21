import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleTitle = (className: string, { size = 'md' }: Classes) =>
  mergeClasses(generic.styles.size.title[size], className);
