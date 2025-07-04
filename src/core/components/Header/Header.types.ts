import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type HeaderDefaultProps = {
  gap?: Gap;
};

export type HeaderConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  HeaderDefaultProps
>;

export type HeaderProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  HeaderDefaultProps
>;
