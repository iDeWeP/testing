import type { TransitionProps } from '../../types';

export const mergeTransitionProps = (
  defaultProps: TransitionProps,
  props?: TransitionProps
) => ({
  enterDuration: defaultProps?.enterDuration,
  exitDuration: defaultProps?.exitDuration,
  enterDelay: defaultProps?.enterDelay,
  exitDelay: defaultProps?.exitDelay,
  ...props
});
