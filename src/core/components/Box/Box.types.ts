import type { ElementType } from 'react';
import type { MergeProps } from '../../types';
import type {
  UnstyledBoxDefaultProps,
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type BoxDefaultProps = UnstyledBoxDefaultProps;

export type BoxConfigProps = UnstyledBoxConfigProps;

export type BoxProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  BoxDefaultProps
>;
