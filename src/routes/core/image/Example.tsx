import type { ReactNode } from 'react';
import { Image } from '../../../core/components/Image/Image';
import type { ImageProps } from '../../../core/components/Image/Image.types';
import imagePath from '../../../assets/images/photo.png';

export const Example = (props: ImageProps<'img'>): ReactNode => (
  <Image
    src={imagePath}
    {...props}
  />
);
