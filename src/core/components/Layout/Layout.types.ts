import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type LayoutDefaultProps = {
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type LayoutConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  LayoutDefaultProps
>;

export type LayoutProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  LayoutDefaultProps
>;
