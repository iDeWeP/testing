import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import mergeClasses from './mergeClasses';

export const styleTitle = (className: string, { fontSize = 'md' }: Classes) =>
  mergeClasses(generic.styles.size.title[fontSize], className);
