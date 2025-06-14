import { generic } from '../../config/generic';
import mergeClasses from './mergeClasses';

export const styleMark = (className: string) =>
  mergeClasses(generic.styles.size.box['xs-x'], className);
