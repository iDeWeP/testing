import type { ElementType } from 'react';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type UnstyledCardFooterConfigProps = UnstyledPaperConfigProps;

export type UnstyledCardFooterProps<E extends ElementType> =
  UnstyledPaperProps<E>;
