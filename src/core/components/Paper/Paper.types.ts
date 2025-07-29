import type { ElementType } from 'react';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type PaperConfigProps = UnstyledPaperConfigProps;

export type PaperProps<E extends ElementType> = UnstyledPaperProps<E>;
