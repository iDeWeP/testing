import type { ElementType } from 'react';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledLayoutConfigProps = UnstyledBoxConfigProps;

export type UnstyledLayoutProps<E extends ElementType> = UnstyledBoxProps<E>;
