import type { ElementType } from 'react';
import type {
  Variant,
  Size,
  Scale,
  Radius,
  Color,
  MergeProps
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type ContainerDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: Scale;
  radius?: Radius;
  color?: Color;
};

export type ContainerConfigProps = MergeProps<
  UnstyledContainerConfigProps,
  ContainerDefaultProps
>;

export type ContainerProps<E extends ElementType> = MergeProps<
  UnstyledContainerProps<E>,
  ContainerDefaultProps
>;
