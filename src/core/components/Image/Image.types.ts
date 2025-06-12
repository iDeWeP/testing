import type { ElementType } from 'react';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type ImageConfigProps = UnstyledBoxConfigProps;

export type ImageProps<E extends ElementType> = UnstyledBoxProps<E>;
