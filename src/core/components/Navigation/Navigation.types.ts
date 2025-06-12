import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type NavigationConfigProps = UnstyledFlexBoxConfigProps;

export type NavigationProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
