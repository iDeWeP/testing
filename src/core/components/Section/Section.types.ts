import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type SectionDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type SectionConfigProps = MergeProps<
  UnstyledListConfigProps,
  SectionDefaultProps
>;

export type SectionProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  SectionDefaultProps
>;
