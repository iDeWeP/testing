import type { ElementType } from 'react';
import type { Peak, Transition, TransitionProps } from '../../types';
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
  transtionProps?: TransitionProps;
};

export type UnstyledTransitionDefaultProps = UnstyledTransitionConfigProps &
  UnstyledBoxDefaultProps;

export type UnstyledTransitionProps<E extends ElementType> =
  UnstyledBoxProps<E> & UnstyledTransitionDefaultProps;
