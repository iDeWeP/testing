import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type SectionConfigProps = UnstyledFlexBoxConfigProps;

export type SectionProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
