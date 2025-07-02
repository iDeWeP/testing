import type { ElementType } from 'react';
import type {
  Peak,
  Transition,
  TransitionProps,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type OptionalProps = {
  in?: boolean;
};

export type UnstyledTransitionDefaultProps = {
  unmountOnExit?: boolean;
  peak?: Peak;
  transition?: Transition;
  duration?: number;
  transitionProps?: TransitionProps;
};

export type UnstyledTransitionConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledTransitionDefaultProps
>;

export type UnstyledTransitionProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledTransitionDefaultProps & OptionalProps
>;
