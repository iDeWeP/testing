import type { ElementType } from 'react';
import type { GroupGap, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

type DefaultProps = {
  gap?: GroupGap;
};

export type UnstyledGroupConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  DefaultProps
>;

export type UnstyledGroupProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  DefaultProps
>;
