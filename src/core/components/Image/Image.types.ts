import type { ElementType } from 'react';
import type { Radius, RefProps } from '../../types';

export type ImageConfigProps = {
  radius: Radius;
};

export type ImageDefaultProps = Partial<ImageConfigProps>;

export type ImageProps<E extends ElementType> = RefProps<E, ImageDefaultProps>;
