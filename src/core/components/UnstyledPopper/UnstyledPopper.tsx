import { type ElementType, useRef } from 'react';
import { useAnimation } from '../../../hooks/hooks/use-animation/use-animation';
import { useCursor } from '../../../hooks/hooks/use-cursor/use-cursor';
import { useEscape } from '../../../hooks/hooks/use-escape/use-escape';
import { useFocusTrap } from '../../../hooks/hooks/use-focus-trap/use-focus-trap';
import { useLockScroll } from '../../../hooks/hooks/use-lock-scroll/use-lock-scroll';
import { useOutClick } from '../../../hooks/hooks/use-out-click/use-out-click';
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
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { useDefaultRerender } from '../../hooks/use-default-rerender/use-default-rerender';
import { usePlacementChange } from '../../hooks/use-placemenet-change/use-placement-change';
import { useStartAnimation } from '../../hooks/use-start-animation/use-start-animation';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergePopperStyle } from '../../utils/merge-popper-style/merge-popper-style';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeTransitionProps } from '../../utils/merge-transition-props/merge-transition-props';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledPopperProps } from './UnstyledPopper.types';
import { UnstyledPopperAnchor } from './UnstyledPopperAnchor';
import { UnstyledPopperArrow } from './UnstyledPopperArrow';
import { UnstyledPopperBackdrop } from './UnstyledPopperBackdrop';
import { unstyledPopperConfig } from './unstyledPopperConfig';

export const UnstyledPopper = <E extends ElementType = 'div'>(
  props: UnstyledPopperProps<E>
) => {
  const {
    ref: forwardedRef,
    anchorRef: anchorElRef,
    open,
    defaultOpen,
    collision,
    trigger,
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
    offset,
    zIndex,
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
  useDefaultRerender(isOpen);
  const { cursor, handleCursorMove } = useCursor();
  const { handleScroll } = useScroll();
  const { handleResize } = useResize();
  const { animation, startAnimation, stopAnimation } = useAnimation(isOpen);

  const anchorRef = anchorElRef ?? anchorNodeRef;
  const isMovable = (isOpen || !animation.isExited) && collision !== 'none';

  const { top, left, mainAxis } = getCords(
    anchorRef,
    ref,
    collision,
    placement,
    offset,
    !!portalEl,
    cursor,
    followCursor
  );

  useStartAnimation(isOpen, startAnimation);

  usePlacementChange(mainAxis, onPlacementChange);

  useWindowResize(isMovable && handleResize);

  useWindowScroll(isMovable && handleScroll);

  useOutClick(
    isOpen && closeOnOutClick && !backdrop && handleClose,
    ref,
    typeof closeOnOutClick === 'boolean' ? anchorRef : closeOnOutClick
  );

  useEscape(isOpen && closeOnEsc && handleClose);

  useAutoFocus(isOpen && focusOnOpen, ref);

  useCloseFocus(!isOpen && focusOnClose, anchorRef);

  useFocusTrap(isOpen && focusTrap && ref);

  useLockScroll(isOpen && lockScroll);

  const anchorNode = anchor && (
    <UnstyledPopperAnchor
      ref={anchorNodeRef}
      open={isOpen}
      isExited={animation.isExited}
      trigger={trigger}
      followCursor={followCursor}
      onOpen={handleOpen}
      onClose={handleClose}
      onCursorMove={handleCursorMove}
    >
      {anchor}
    </UnstyledPopperAnchor>
  );

  if (!isOpen && animation.isExited && unmountOnExit) {
    return anchorNode;
  }

  const mergedClassName = mergeClassName('unstyledPopper', className, {
    followCursor
  });

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

  return (
    <>
      {anchorNode}
      {portNode(
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
              onClose={setProp(!!closeOnOutClick, handleClose)}
              portalEl={null}
              {...componentProps.backdrop}
              transitionProps={mergeTransitionProps(
                transitionProps,
                componentProps.backdrop?.transitionProps
              )}
            />
          )}
          <UnstyledFlexBox
            ref={mergeRefs(forwardedRef, ref)}
            variant={variant}
            border={border}
            color={color}
            className={mergedClassName}
            style={mergedStyles}
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
                color={color}
                {...componentProps.arrow}
              />
            )}
          </UnstyledFlexBox>
        </>,
        portalEl
      )}
    </>
  );
};
