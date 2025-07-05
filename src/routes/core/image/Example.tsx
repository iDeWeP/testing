import { Image } from '../../../core/components/Image/Image';
import type { ImageProps } from '../../../core/components/Image/Image.types';

export const Example = ({ ...restProps }: ImageProps<'img'>) => (
  <Image {...restProps} />
);
