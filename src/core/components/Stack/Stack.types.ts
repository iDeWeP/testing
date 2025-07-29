import type { ElementType } from 'react';
import type { Gap, MergeProps, OmitOrientation } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

type DefaultProps = {
  gap?: Gap;
};

export type StackConfigProps = MergeProps<
  OmitOrientation<UnstyledPaperConfigProps>,
  DefaultProps
>;

export type StackProps<E extends ElementType> = MergeProps<
  OmitOrientation<UnstyledPaperProps<E>>,
  DefaultProps
>;
