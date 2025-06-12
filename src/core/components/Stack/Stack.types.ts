import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type StackConfigProps = UnstyledFlexBoxConfigProps;

export type StackProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
