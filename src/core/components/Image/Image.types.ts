import type { ElementType } from 'react';
import type { Radius, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  radius?: Radius;
};

export type ImageConfigProps = MergeProps<UnstyledBoxConfigProps, DefaultProps>;

export type ImageProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps
>;
