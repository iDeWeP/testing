import type { ElementType } from 'react';
import type { Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type TitleDefaultProps = {
  font?: Font;
  color?: Color;
};

export type TitleConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  TitleDefaultProps
>;

export type TitleProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  TitleDefaultProps
>;
