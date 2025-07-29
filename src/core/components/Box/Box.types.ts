import type { ElementType } from 'react';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type BoxConfigProps = UnstyledBoxConfigProps;

export type BoxProps<E extends ElementType> = UnstyledBoxProps<E>;
