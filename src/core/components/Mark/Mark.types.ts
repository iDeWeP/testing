import type { ElementType } from 'react';
import type {
  UnstyledTypographyConfigProps,
  UnstyledTypographyProps
} from '../UnstyledTypography/UnstyledTypography.types';

export type MarkConfigProps = UnstyledTypographyConfigProps;

export type MarkProps<E extends ElementType> = UnstyledTypographyProps<E>;
