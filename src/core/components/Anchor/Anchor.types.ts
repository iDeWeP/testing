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

export type AnchorConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  DefaultProps
>;

export type AnchorProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps
>;
