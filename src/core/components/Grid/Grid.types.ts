import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  gap?: Gap;
  gx?: Gap;
  gy?: Gap;
};

export type GridConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  DefaultProps
>;

export type GridProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps
>;
