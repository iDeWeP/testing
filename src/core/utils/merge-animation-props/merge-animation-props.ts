import type { AnimationProps } from '../../types';

export const mergeAnimationProps = (
  defaultProps: AnimationProps,
  props?: AnimationProps
) => ({
  enterDuration: defaultProps?.enterDuration,
  exitDuration: defaultProps?.exitDuration,
  enterDelay: defaultProps?.enterDelay,
  exitDelay: defaultProps?.exitDelay,
  ...props
});
