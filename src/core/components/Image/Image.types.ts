import type { ElementType } from 'react';
import type { Radius, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type ImageDefaultProps = {
  radius?: Radius;
};

export type ImageConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  ImageDefaultProps
>;

export type ImageProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  ImageDefaultProps
>;
