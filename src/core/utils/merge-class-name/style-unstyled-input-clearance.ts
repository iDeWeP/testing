import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputClearance = (className: string) =>
  mergeClasses(unstyledInputConfig.styles.clearance.default, className);
