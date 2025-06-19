import { type ElementType, useRef } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/useAnimation';
import { useAutoFocus } from '../../../hooks/hooks/use-auto-focus/useAutoFocus';
import { useCloseFocus } from '../../../hooks/hooks/use-close-focus/useCloseFocus';
import { useCursor } from '../../../hooks/hooks/use-cursor/useCursor';
import { useEscape } from '../../../hooks/hooks/use-escape/useEscape';
import { useFocusTrap } from '../../../hooks/hooks/use-focus-trap/useFocusTrap';
import { useLockScroll } from '../../../hooks/hooks/use-lock-scroll/useLockScroll';
import { useOutClick } from '../../../hooks/hooks/use-out-click/useOutClick';
import { useResize } from '../../../hooks/hooks/use-resize/useWindowSize';
import { useScroll } from '../../../hooks/hooks/use-scroll/useScroll';
import { useWindowResize } from '../../../hooks/hooks/use-window-resize/useWindowResize';
import { useWindowScroll } from '../../../hooks/hooks/use-window-scroll/useWindowScroll';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combineHandlers';
import getCords from '../../../utils/utils/getCords/getCords';
import { mergeRefs } from '../../../utils/utils/merge-refs/mergeRefs';
import { portElement } from '../../../utils/utils/port-element/portElement';
import useStartAnimation from '../../hooks/use-animation-start/useTransitionStart';
import { usePlacementChange } from '../../hooks/use-placemenet-change/usePlacementChange';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergePopperStyle } from '../../utils/mergePopperStyle/mergPopperStyle';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import { UnstyledArrow } from './UnstyledArrow';
import { UnstyledBackdrop } from './UnstyledBackdrop';
import type { UnstyledPopperProps } from './UnstyledPopper.types';
import { unstyledPopperConfig } from './unstyledPopperConfig';
import { setProp } from '../../../utils/utils/set-prop/setProp';
import { useControlledState } from '../../hooks/use-controlled-state/useControlledState';
import { UnstyledAnchor } from './UnstyledAnchor';

export const UnstyledPopper = <E extends ElementType = 'div'>(
  props: UnstyledPopperProps<E>
) => {
  const {
    ref: forwardedRef,
    anchorRef: anchorElRef,
    open,
    defaultOpen,
    trigger,
    stable,
    followCursor,
    closeOnOutClick,
    closeOnEsc,
    focusOnOpen,
    focusOnClose,
    focusTrap,
    lockScroll,
    unmountOnExit,
    peak,
    variant,
    placement,
    zIndex,
    offset,
    border,
    color,
    duration,
    className,
    style,
    onOpen,
    onClose,
    onPlacementChange,
    onTransitionEnd,
    portalEl,
    transitionProps,
    componentProps,
    anchor,
    arrow,
    backdrop,
    children,
    ...restProps
  } = mergeProps(unstyledPopperConfig.props, props);

  const ref = useRef<HTMLDivElement>(null);
  const anchorNodeRef = useRef<HTMLElement>(null);

  const { isOpen, handleOpen, handleClose } = useControlledState(
    defaultOpen,
    open,
    onOpen,
    onClose
  );
  const { cursor, handleCursorMove } = useCursor();
  const { handleScroll } = useScroll();
  const { handleResize } = useResize();
  const { animation, startAnimation, stopAnimation } = useAnimation(isOpen);

  const anchorRef = anchorElRef ?? anchorNodeRef;
  const isExited = !isOpen && animation.isExited;
  const { top, left, mainAxis } = getCords(
    ref,
    !stable,
    placement,
    offset,
    !!portalEl,
    anchorRef,
    followCursor,
    cursor
  );

  useStartAnimation(isOpen, startAnimation);

  usePlacementChange(mainAxis, onPlacementChange);

  useWindowResize(!isExited && !stable && !followCursor && handleResize);

  useWindowScroll(!isExited && !stable && !followCursor && handleScroll);

  useOutClick(
    isOpen && closeOnOutClick && !backdrop && onClose,
    ref,
    typeof closeOnOutClick === 'boolean' ? anchorRef : closeOnOutClick
  );

  useEscape(isOpen && closeOnEsc && onClose);

  useAutoFocus(isOpen && focusOnOpen && ref, focusOnOpen === true);

  useCloseFocus(!isOpen && (focusOnClose === true ? anchorRef : focusOnClose));

  useFocusTrap(isOpen && focusTrap && ref);

  useLockScroll(isOpen && lockScroll);

  const anchorNode = anchor && (
    <UnstyledAnchor
      ref={anchorNodeRef}
      isOpen={isOpen}
      animation={animation}
      trigger={trigger}
      followCursor={followCursor}
      onOpen={handleOpen}
      onClose={handleClose}
      onCursorMove={handleCursorMove}
    >
      {anchor}
    </UnstyledAnchor>
  );

  if (!isOpen && animation.isExited && unmountOnExit) {
    return anchorNode;
  }

  const mergedClassName = mergeClassName('unstyledPopper', className);

  const mergedStyles = mergePopperStyle(
    isOpen,
    animation,
    peak,
    top,
    left,
    zIndex,
    duration,
    style,
    transitionProps
  );

  const handleTransitionEnd = combineHandlers(stopAnimation, onTransitionEnd);

  return (
    <>
      {anchorNode}
      {portElement(
        <UnstyledBox
          ref={mergeRefs(forwardedRef, ref)}
          variant={variant}
          border={border}
          color={color}
          className={mergedClassName}
          style={mergedStyles}
          onTransitionEnd={handleTransitionEnd}
          {...restProps}
        >
          {backdrop && (
            <UnstyledBackdrop
              isOpen={isOpen}
              animation={animation}
              peak={peak}
              zIndex={1000}
              invisible
              blur={false}
              onClose={setProp(!!closeOnOutClick, onClose)}
              portalEl={null}
              {...componentProps.backdrop}
            />
          )}
          {children}
          {arrow && (
            <UnstyledArrow
              variant={variant}
              placement={mainAxis}
              offset={[0, '50%']}
              border={border}
              color={color}
              componentProps={{
                polygon: componentProps.polygon
              }}
              {...componentProps.arrow}
            />
          )}
        </UnstyledBox>,
        portalEl
      )}
    </>
  );
};
