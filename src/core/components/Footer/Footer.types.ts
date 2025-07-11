import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type FooterDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type FooterConfigProps = MergeProps<
  UnstyledListConfigProps,
  FooterDefaultProps
>;

export type FooterProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  FooterDefaultProps
>;
