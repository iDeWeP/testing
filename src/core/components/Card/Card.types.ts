import type { ElementType } from 'react';
import type {
  UnstyledFlexConfigProps,
  UnstyledFlexProps
} from '../UnstyledFlex/UnstyledFlex.types';

export type CardConfigProps = UnstyledFlexConfigProps;

export type CardProps<E extends ElementType> = UnstyledFlexProps<E>;
