import type { ElementType } from 'react';
import type { OmitMargin } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type UnstyledDropdownConfigProps = OmitMargin<UnstyledPaperConfigProps>;

export type UnstyledDropdownProps<E extends ElementType> = OmitMargin<
  UnstyledPaperProps<E>
>;
