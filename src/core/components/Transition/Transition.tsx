import { type ElementType, type ReactNode, useRef } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/use-animation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useStartAnimation } from '../../hooks/use-start-animation/use-start-animation';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeTransitionStyle } from '../../utils/merge-transition-style/merge-transition-style';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { TransitionProps } from './Transition.types';
import { transitionConfig } from './transitionConfig';

export const Transition = <E extends ElementType>(
  props: TransitionProps<E>
): ReactNode => {
  const {
    ref: forwardedRef,
    in: isIn = false,
    unmountOnExit,
    peak,
    transition,
    duration,
    className,
    style,
    onTransitionEnd,
    animationProps,
    ...restProps
  } = useMergeProps('transition', transitionConfig.props, props);

  const ref = useRef<HTMLDivElement>(null);

  const { animation, startAnimation, stopAnimation } = useAnimation(isIn);

  useStartAnimation(isIn, startAnimation);

  if (unmountOnExit && !isIn && animation.isExited) {
    return undefined;
  }

  const mergedClassName = mergeClassName('transition', className, {
    transition
  });

  const mergedStyles = mergeTransitionStyle(
    isIn,
    animation,
    peak,
    transition,
    duration,
    style,
    animationProps,
    ref
  );

  return (
    <UnstyledBox
      ref={mergeRefs(forwardedRef, ref)}
      className={mergedClassName}
      style={mergedStyles}
      onTransitionEnd={combineHandlers(onTransitionEnd, stopAnimation)}
      {...restProps}
    />
  );
};
