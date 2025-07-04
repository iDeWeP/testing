import type { ElementType } from 'react';
import type { Variant, Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type TextDefaultProps = {
  variant?: Variant;
  font?: Font;
  color?: Color;
};

export type TextConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  TextDefaultProps
>;

export type TextProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  TextDefaultProps
>;
