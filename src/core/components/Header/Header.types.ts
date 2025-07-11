import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledCardConfigProps,
  UnstyledCardProps
} from '../UnstyledCard/UnstyledCard.types';

export type HeaderDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type HeaderConfigProps = MergeProps<
  UnstyledCardConfigProps,
  HeaderDefaultProps
>;

export type HeaderProps<E extends ElementType> = MergeProps<
  UnstyledCardProps<E>,
  HeaderDefaultProps
>;
