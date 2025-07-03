import type { ElementType } from 'react';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type FlexConfigProps = UnstyledBoxConfigProps;

export type FlexProps<E extends ElementType> = UnstyledBoxProps<E>;
