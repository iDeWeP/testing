import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleAvataGroup = (
  className: string,
  { orientation = 'row', spacing = 'unset' }: Classes
) => mergeClasses(systemStyles.spacing[orientation][spacing], className);
