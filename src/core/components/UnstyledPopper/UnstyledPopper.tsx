import { type ElementType, useRef } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/use-animation';
import { useFocusTrap } from '../../../hooks/hooks/use-focus-trap/use-focus-trap';
import { useKeyDown } from '../../../hooks/hooks/use-key-down/use-key-down';
import { useLockScroll } from '../../../hooks/hooks/use-lock-scroll/use-lock-scroll';
import { useOutClick } from '../../../hooks/hooks/use-out-click/use-out-click';
import { useOverflow } from '../../../hooks/hooks/use-overflow/use-overflow';
import { useResize } from '../../../hooks/hooks/use-resize/use-resize';
import { useScroll } from '../../../hooks/hooks/use-scroll/use-scroll';
import { useWindowResize } from '../../../hooks/hooks/use-window-resize/use-window-resize';
import { useWindowScroll } from '../../../hooks/hooks/use-window-scroll/use-window-scroll';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { getCords } from '../../../utils/utils/get-cords/get-cords';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { portNode } from '../../../utils/utils/port-node/port-node';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useAutoFocus } from '../../hooks/use-auto-focus/use-auto-focus';
import { useCloseFocus } from '../../hooks/use-close-focus/use-close-focus';
import { useCollision } from '../../hooks/use-collision/use-collision';
import { useDefaultRerender } from '../../hooks/use-default-rerender/use-default-rerender';
import { useStartAnimation } from '../../hooks/use-start-animation/use-start-animation';
import { mergeAnimationProps } from '../../utils/merge-animation-props/merge-animation-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergePopperStyle } from '../../utils/merge-popper-style/merge-popper-style';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledDropdown } from '../UnstyledDropdown/UnstyledDropdown';
import type { UnstyledPopperProps } from './UnstyledPopper.types';
import { UnstyledPopperArrow } from './UnstyledPopperArrow';
import { UnstyledPopperBackdrop } from './UnstyledPopperBackdrop';
import { unstyledPopperConfig } from './unstyledPopperConfig';

export const UnstyledPopper = <E extends ElementType>(
  props: UnstyledPopperProps<E>
) => {
  const {
    ref: forwardedRef,
    anchorRef,
    open: isOpen = false,
    followCursor,
    collision,
    closeOnOutClick,
    closeOnEsc,
    focusOnOpen,
    focusOnClose,
    focusTrap,
    lockScroll,
    unmountOnExit,
    peak,
    placement,
    offset,
    threshold,
    zIndex,
    transition,
    duration,
    className,
    style,
    onClose,
    onCollision,
    onKeyDown,
    onTransitionEnd,
    portalEl,
    transitionProps,
    componentProps,
    arrow,
    backdrop,
    children,
    variant,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    color,
    ...restProps
  } = mergeProps(unstyledPopperConfig.props, props);

  const ref = useRef<HTMLDivElement>(null);

  useDefaultRerender(isOpen);
  const { handleScroll } = useScroll();
  const { handleResize } = useResize();
  const { animation, startAnimation, stopAnimation } = useAnimation(isOpen);

  const isMovable = isOpen || !animation.isExited;
  const { top, left, mainAxis } = getCords(
    ref,
    collision,
    placement,
    offset,
    threshold,
    !!portalEl,
    anchorRef,
    followCursor
  );

  useStartAnimation(isOpen, startAnimation);

  useCollision(mainAxis, onCollision);

  useOverflow();

  useWindowResize(isMovable && handleResize);

  useWindowScroll(isMovable && handleScroll);

  useOutClick(
    closeOnOutClick && !backdrop && isOpen && onClose,
    ref,
    typeof closeOnOutClick === 'boolean' ? anchorRef : closeOnOutClick
  );

  useAutoFocus(isOpen && focusOnOpen, ref);

  useCloseFocus(!isOpen && focusOnClose, anchorRef);

  useFocusTrap(focusTrap && isOpen && ref);

  useLockScroll(lockScroll && isOpen);

  const handleEscape = useKeyDown('Escape', closeOnEsc && isOpen && onClose);

  if (unmountOnExit && !isOpen && animation.isExited) {
    return undefined;
  }

  const mergedClassName = mergeClassName('unstyledPopper', className, {
    followCursor: !!followCursor
  });

  const mergedStyles = mergePopperStyle(
    isOpen,
    animation,
    peak,
    top,
    left,
    zIndex,
    transition,
    duration,
    style,
    transitionProps
  );

  return portNode(
    <>
      {backdrop && (
        <UnstyledPopperBackdrop
          open={isOpen}
          animation={animation}
          peak={peak}
          zIndex={1000}
          invisible
          blur={false}
          duration={duration}
          onClose={setProp(!!closeOnOutClick, onClose)}
          portalEl={null}
          {...componentProps.backdrop}
          animationProps={mergeAnimationProps(
            transitionProps,
            componentProps.backdrop?.animationProps
          )}
        />
      )}
      <UnstyledDropdown
        ref={mergeRefs(forwardedRef, ref)}
        tabIndex={-1}
        variant={variant}
        border={border}
        bx={bx}
        by={by}
        bt={bt}
        bb={bb}
        bl={bl}
        br={br}
        color={color}
        className={mergedClassName}
        style={mergedStyles}
        onKeyDown={combineHandlers(onKeyDown, handleEscape)}
        onTransitionEnd={combineHandlers(onTransitionEnd, stopAnimation)}
        {...restProps}
      >
        {children}
        {arrow && (
          <UnstyledPopperArrow
            variant={variant}
            placement={mainAxis}
            offset={['50%', 0]}
            border={border}
            bx={bx}
            by={by}
            bt={bt}
            bb={bb}
            bl={bl}
            br={br}
            color={color}
            {...componentProps.arrow}
          />
        )}
      </UnstyledDropdown>
    </>,
    portalEl
  );
};
