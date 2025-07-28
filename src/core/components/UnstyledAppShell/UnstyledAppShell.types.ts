import type { ElementType } from 'react';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledAppShellConfigProps = UnstyledBoxConfigProps;

export type UnstyledAppShellProps<E extends ElementType> = UnstyledBoxProps<E>;
