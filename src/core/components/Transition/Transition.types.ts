import type { ElementType } from 'react';
import type { Peak, Transition, AnimationProps, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type OptionalProps = {
  in?: boolean;
};

type DefaultProps = {
  unmountOnExit?: boolean;
  peak?: Peak;
  transition?: Transition;
  duration?: number;
  animationProps?: AnimationProps;
};

export type TransitionConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  DefaultProps
>;

export type TransitionProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  DefaultProps & OptionalProps
>;
