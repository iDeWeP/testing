import { imageConfig } from '../../components/Image/imageConfig';
import { mergeClasses } from './merge-classes';

export const styleImage = (className: string) =>
  mergeClasses(imageConfig.styles.root.default, className);
