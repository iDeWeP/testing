import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type ListConfigProps = UnstyledFlexBoxConfigProps;

export type ListProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
