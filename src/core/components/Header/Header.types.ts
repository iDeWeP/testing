import type { ElementType } from 'react';
import type { Orientation, Gap, MergeProps } from '../../types';
import type {
  UnstyledListConfigProps,
  UnstyledListProps
} from '../UnstyledList/UnstyledList.types';

export type HeaderDefaultProps = {
  orientation?: Orientation;
  gap?: Gap;
};

export type HeaderConfigProps = MergeProps<
  UnstyledListConfigProps,
  HeaderDefaultProps
>;

export type HeaderProps<E extends ElementType> = MergeProps<
  UnstyledListProps<E>,
  HeaderDefaultProps
>;
