import type { ElementType } from 'react';
import type { Gap, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type FlexDefaultProps = {
  gap?: Gap;
};

export type FlexConfigProps = MergeProps<
  Omit<UnstyledBoxConfigProps, 'gx' | 'gy'>,
  FlexDefaultProps
>;

export type FlexProps<E extends ElementType> = MergeProps<
  Omit<UnstyledBoxProps<E>, 'gx' | 'gy'>,
  FlexDefaultProps
>;
