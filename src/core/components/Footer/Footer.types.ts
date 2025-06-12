import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type FooterConfigProps = UnstyledFlexBoxConfigProps;

export type FooterProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
