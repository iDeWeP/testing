import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type FooterDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type FooterConfigProps = MergeProps<
  UnstyledCardConfigProps,
  FooterDefaultProps
>;

export type FooterProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  FooterDefaultProps
>;
