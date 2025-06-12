import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type CardConfigProps = UnstyledFlexBoxConfigProps;

export type CardProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
