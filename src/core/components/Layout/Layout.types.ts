import type { ElementType } from 'react';
import type { Layout, Gap, MergeProps } from '../../types';
import type {
  UnstyledLayoutConfigProps,
  UnstyledLayoutProps
} from '../UnstyledLayout/UnstyledLayout.types';

type DefaultProps = {
  layout?: Layout;
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type LayoutConfigProps = MergeProps<
  UnstyledLayoutConfigProps,
  DefaultProps
>;

export type LayoutProps<E extends ElementType> = MergeProps<
  UnstyledLayoutProps<E>,
  DefaultProps
>;
