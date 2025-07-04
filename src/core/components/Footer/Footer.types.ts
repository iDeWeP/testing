import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type FooterDefaultProps = {
  gap?: Gap;
};

export type FooterConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  FooterDefaultProps
>;

export type FooterProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  FooterDefaultProps
>;
