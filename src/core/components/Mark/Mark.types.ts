import type { ElementType } from 'react';
import type { Variant, Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type MarkDefaultProps = {
  variant?: Variant;
  font?: Font;
  color?: Color;
};

export type MarkConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  MarkDefaultProps
>;

export type MarkProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  MarkDefaultProps
>;
