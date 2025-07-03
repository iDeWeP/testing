import { stackConfig } from '../../components/Stack/stackConfig';
import { mergeClasses } from './merge-classes';

export const styleStack = (className: string) =>
  mergeClasses(stackConfig.styles.root.default, className);
