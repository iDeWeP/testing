import type { ElementType } from 'react';
import type {
  Peak,
  Transition,
  TransitionProps,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxDefaultProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledTransitionConfigProps = {
  in?: boolean;
  unmountOnExit?: boolean;
  peak?: Peak;
  transition?: Transition;
  duration?: number;
  transitionProps?: TransitionProps;
};

export type UnstyledTransitionDefaultProps = MergeProps<
  UnstyledBoxDefaultProps,
  UnstyledTransitionConfigProps
>;

export type UnstyledTransitionProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledTransitionDefaultProps
>;
