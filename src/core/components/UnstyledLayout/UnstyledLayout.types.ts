import type { ElementType } from 'react';
import type { Layout, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  layout?: Layout;
};

export type UnstyledLayoutConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  DefaultProps
>;

export type UnstyledLayoutProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps
>;
