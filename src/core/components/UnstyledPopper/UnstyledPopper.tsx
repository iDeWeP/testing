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
import { portElement } from '../../../utils/utils/port-element/port-element';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useAutoFocus } from '../../hooks/use-auto-focus/use-auto-focus';
import { useCloseFocus } from '../../hooks/use-close-focus/use-close-focus';
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { useDefaultRerender } from '../../hooks/use-default-rerender/use-default-rerender';
import { usePlacementChange } from '../../hooks/use-placemenet-change/use-placement-change';
import { useStartAnimation } from '../../hooks/use-start-animation/use-start-animation';
import { mergePopperStyle } from '../../utils/merge-popper-style/merge-popper-style';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeTransitionProps } from '../../utils/merge-transition-props/merge-transition-props';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import { UnstyledAnchor } from './UnstyledAnchor';
import { UnstyledArrow } from './UnstyledArrow';
import { UnstyledBackdrop } from './UnstyledBackdrop';
import type { UnstyledPopperProps } from './UnstyledPopper.types';
import { unstyledPopperConfig } from './unstyledPopperConfig';

export const UnstyledPopper = <E extends ElementType = 'div'>(
  props: UnstyledPopperProps<E>
) => {
  const {
    ref: forwardedRef,
    anchorRef: anchorElRef,
    open,
    defaultOpen,
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
    float,
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
  const isExited = !isOpen && animation.isExited;

  const { top, left, mainAxis } = getCords(
    ref,
    placement,
    float,
    offset,
    !!portalEl,
    anchorRef,
    cursor,
    followCursor
  );

  useStartAnimation(isOpen, startAnimation);

  usePlacementChange(mainAxis, onPlacementChange);

  useWindowResize(
    !isExited && float !== 'none' && !followCursor && handleResize
  );

  useWindowScroll(
    !isExited && float !== 'none' && !followCursor && handleScroll
  );

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
    <UnstyledAnchor
      ref={anchorNodeRef}
      isOpen={isOpen}
      isExited={animation.isExited}
      trigger={trigger}
      followCursor={followCursor}
      onOpen={handleOpen}
      onClose={handleClose}
      onCursorMove={handleCursorMove}
    >
      {anchor}
    </UnstyledAnchor>
  );

  if (isExited && unmountOnExit) {
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
      {portElement(
        <>
          {backdrop && (
            <UnstyledBackdrop
              isOpen={isOpen}
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
          </UnstyledFlexBox>
        </>,
        portalEl
      )}
    </>
  );
};
