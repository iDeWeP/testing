import { useRef, type ElementType } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/useAnimation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combineHandlers';
import useTransitionStart from '../../hooks/use-animation-start/useTransitionStart';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergeTransitionStyle } from '../../utils/mergeTransitionStyle/mergeTransitionStyle';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledTransitionProps } from './UnstyledTransition.types';
import { mergeRefs } from '../../../utils/utils/merge-refs/mergeRefs';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import { unstyledTransitionConfig } from './unstyledTransitionConfig';
import { unstyledBoxConfig } from '../UnstyledBox/unstyledBoxConfig';

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

  useTransitionStart(isIn, startAnimation);

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

  const handleTransitionEnd = combineHandlers(stopAnimation, onTransitionEnd);

  return (
    <UnstyledBox
      as="div"
      ref={mergeRefs(forwardedRef, ref)}
      scale={scale}
      className={mergedClassName}
      style={mergedStyles}
      onTransitionEnd={handleTransitionEnd}
      {...restProps}
    />
  );
};
