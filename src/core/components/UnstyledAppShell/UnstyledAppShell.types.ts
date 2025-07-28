import type { ElementType } from 'react';
import type { Variant, Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledAppShellDefaultProps = {
  variant?: Variant;
  font?: Font;
  color?: Color;
};

export type UnstyledAppShellConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledAppShellDefaultProps
>;

export type UnstyledAppShellProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledAppShellDefaultProps
>;
