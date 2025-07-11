import type { ElementType } from 'react';
import type { Peak, Transition, AnimationProps, MergeProps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type TransitionOptionalProps = {
  in?: boolean;
};

export type TransitionDefaultProps = {
  unmountOnExit?: boolean;
  peak?: Peak;
  transition?: Transition;
  duration?: number;
  animationProps?: AnimationProps;
};

export type TransitionConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  TransitionDefaultProps
>;

export type TransitionProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  TransitionDefaultProps & TransitionOptionalProps
>;
