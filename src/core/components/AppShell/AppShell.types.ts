import type { ElementType } from 'react';
import type { Variant, Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type AppShellDefaultProps = {
  variant?: Variant;
  font?: Font;
  color?: Color;
};

export type AppShellConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  AppShellDefaultProps
>;

export type AppShellProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  AppShellDefaultProps
>;
