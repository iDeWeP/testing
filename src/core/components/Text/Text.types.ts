import type { ElementType } from 'react';
import type {
  UnstyledTypographyConfigProps,
  UnstyledTypographyProps
} from '../UnstyledTypography/UnstyledTypography.types';

export type TextConfigProps = UnstyledTypographyConfigProps;

export type TextProps<E extends ElementType> = UnstyledTypographyProps<E>;
