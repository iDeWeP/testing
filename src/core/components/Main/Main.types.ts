import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type MainConfigProps = UnstyledFlexBoxConfigProps;

export type MainProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
