import { generic } from '../../config/generic';
import mergeClasses from './mergeClasses';

export const styleMark = (className: string) =>
  mergeClasses(generic.styles.size.spacing['xs-x'], className);
