import type { ElementType } from 'react';
import type { OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledTypographyConfigProps = OmitGaps<UnstyledBoxConfigProps>;

export type UnstyledTypographyProps<E extends ElementType> = OmitGaps<
  UnstyledBoxProps<E>
>;
