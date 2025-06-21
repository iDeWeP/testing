import { type ElementType, useRef } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/use-animation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { useStartAnimation } from '../../hooks/use-start-animation/use-start-animation';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergeTransitionStyle } from '../../utils/mergeTransitionStyle/merge-transition-style';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import { unstyledBoxConfig } from '../UnstyledBox/unstyledBoxConfig';
import type { UnstyledTransitionProps } from './UnstyledTransition.types';
import { unstyledTransitionConfig } from './unstyledTransitionConfig';

export const UnstyledTransition = <E extends ElementType = 'div'>(
  props: UnstyledTransitionProps<E>
) => {
  const {
    ref: forwardedRef,
    in: isIn,
    unmountOnExit,
    peak,
    scale = unstyledBoxConfig.props.scale,
    transition,
    duration,
    className,
    style,
    onTransitionEnd,
    transitionProps,
    ...restProps
  } = mergeProps(unstyledTransitionConfig.props, props);

  const ref = useRef<HTMLDivElement>(null);

  const { animation, startAnimation, stopAnimation } = useAnimation(isIn);

  useStartAnimation(isIn, startAnimation);

  if (!isIn && animation.isExited && unmountOnExit) {
    return undefined;
  }

  const mergedClassName = mergeClassName('unstyledTransition', className, {
    transition
  });

  const mergedStyles = mergeTransitionStyle(
    ref,
    isIn,
    animation,
    peak,
    scale,
    transition,
    duration,
    style,
    transitionProps
  );

  return (
    <UnstyledBox
      ref={mergeRefs(forwardedRef, ref)}
      scale={scale}
      className={mergedClassName}
      style={mergedStyles}
      onTransitionEnd={combineHandlers(onTransitionEnd, stopAnimation)}
      {...restProps}
    />
  );
};
