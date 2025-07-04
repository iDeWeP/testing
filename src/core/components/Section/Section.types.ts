import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type SectionDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SectionConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  SectionDefaultProps
>;

export type SectionProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  SectionDefaultProps
>;
