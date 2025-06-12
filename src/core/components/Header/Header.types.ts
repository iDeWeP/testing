import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type HeaderConfigProps = UnstyledFlexBoxConfigProps;

export type HeaderProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
