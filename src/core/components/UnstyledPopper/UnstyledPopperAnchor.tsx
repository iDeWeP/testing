import {
  cloneElement,
  type ComponentPropsWithRef,
  type ElementType,
  type MouseEvent,
  type ReactElement,
  type RefObject
} from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import type { Trigger } from '../../types';
import { getTriggers } from '../../utils/get-triggers/get-triggers';

type Props = {
  ref: RefObject<HTMLElement | null>;
  open: boolean;
  isExited: boolean;
  trigger: Trigger;
  followCursor: boolean;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  onCursorMove?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactElement<ComponentPropsWithRef<ElementType>>;
};

export const UnstyledPopperAnchor = ({
  ref: forwardedRef,
  open,
  isExited,
  trigger,
  followCursor,
  onOpen,
  onClose,
  onCursorMove,
  children
}: Props) => {
  const { clickOpen, clickClose, hoverOpen, hoverClose } = getTriggers(trigger);

  const handleClick = combineHandlers(
    children.props.onClick,
    clickOpen && !open && onOpen,
    clickClose && open && onClose,
    clickOpen && followCursor && !open && onCursorMove
  );

  const handleMouseEnter = combineHandlers(
    children.props.onMouseEnter,
    hoverOpen && !open && onOpen
  );

  const handleMouseLeave = combineHandlers(
    children.props.onMouseLeave,
    hoverClose && open && onClose
  );

  const handleMouseMove = combineHandlers(
    children.props.onMouseMove,
    followCursor && !isExited && onCursorMove
  );

  return cloneElement(children, {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
    ref: mergeRefs(children.props.ref, forwardedRef)
  });
};
