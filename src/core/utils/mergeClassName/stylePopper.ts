import { generic } from '../../config/generic';
import mergeClasses from './mergeClasses';

export const styleUnstyledPopper = (className: string) =>
  mergeClasses(generic.styles.transition.fade, className);
