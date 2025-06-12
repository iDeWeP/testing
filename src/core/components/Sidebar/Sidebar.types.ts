import type { ElementType } from 'react';
import type {
  UnstyledFlexBoxConfigProps,
  UnstyledFlexBoxProps
} from '../UnstyledFlexBox/UnstyledFlexBox.types';

export type SidebarConfigProps = UnstyledFlexBoxConfigProps;

export type SidebarProps<E extends ElementType> = UnstyledFlexBoxProps<E>;
