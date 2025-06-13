import type { ElementType } from 'react';
import type {
  UnstyledTypographyConfigProps,
  UnstyledTypographyProps
} from '../UnstyledTypography/UnstyledTypography.types';

export type LabelConfigProps = UnstyledTypographyConfigProps;

export type LabelProps<E extends ElementType> = UnstyledTypographyProps<E>;
