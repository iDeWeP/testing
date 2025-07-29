import type { ElementType } from 'react';
import type { Variant, Font, Color, MergeProps } from '../../types';
import type {
  UnstyledAppShellConfigProps,
  UnstyledAppShellProps
} from '../UnstyledAppShell/UnstyledAppShell.types';

type DefaultProps = {
  variant?: Variant;
  font?: Font;
  color?: Color;
};

export type AppShellConfigProps = MergeProps<
  UnstyledAppShellConfigProps,
  DefaultProps
>;

export type AppShellProps<E extends ElementType> = MergeProps<
  UnstyledAppShellProps<E>,
  DefaultProps
>;
