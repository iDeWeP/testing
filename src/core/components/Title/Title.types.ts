import type { ElementType } from 'react';
import type {
  UnstyledTypographyConfigProps,
  UnstyledTypographyProps
} from '../UnstyledTypography/UnstyledTypography.types';

export type TitleConfigProps = UnstyledTypographyConfigProps;

export type TitleProps<E extends ElementType> = UnstyledTypographyProps<E>;
