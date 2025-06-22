import { generic } from '../../config/generic';
import { mergeClasses } from './merge-classes';

export const styleMark = (className: string) =>
  mergeClasses(generic.styles.spacing.container['xs-x'], className);
