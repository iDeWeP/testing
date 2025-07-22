import { imageConfig } from '../../components/Image/imageConfig';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleImage = (className: string): ClassName =>
  mergeClasses(imageConfig.styles.root.default, className);
