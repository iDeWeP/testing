import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type SectionDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SectionConfigProps = MergeProps<
  UnstyledCardConfigProps,
  SectionDefaultProps
>;

export type SectionProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  SectionDefaultProps
>;
