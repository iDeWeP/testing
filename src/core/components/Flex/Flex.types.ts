import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type FlexConfigProps = UnstyledFlexBoxConfigProps;

export type FlexProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
