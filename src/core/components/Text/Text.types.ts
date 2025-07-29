import type { ElementType } from 'react';
import type { Font, Color, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  font?: Font;
  color?: Color;
};

export type TextConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  DefaultProps
>;

export type TextProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps
>;
