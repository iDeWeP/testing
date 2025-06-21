import {
  cloneElement,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  type MouseEvent,
  type ReactElement,
  type Ref
} from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import type { Trigger } from '../../types';
import { getTriggers } from '../../utils/get-triggers/get-triggers';

type Props = {
  ref: ForwardedRef<HTMLElement | null>;
  isOpen: boolean;
  isExited: boolean;
  trigger: Trigger;
  followCursor: boolean;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
  onCursorMove?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactElement<ComponentPropsWithRef<ElementType>>;
};

export const UnstyledAnchor = ({
  ref: forwardedRef,
  isOpen,
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
    children?.props.onClick,
    !isOpen && clickOpen && onOpen,
    isOpen && clickClose && onClose,
    !isOpen && clickOpen && followCursor && onCursorMove
  );

  const handleMouseEnter = combineHandlers(
    children?.props.onMouseEnter,
    !isOpen && hoverOpen && onOpen
  );

  const handleMouseLeave = combineHandlers(
    children?.props.onMouseLeave,
    isOpen && hoverClose && onClose
  );

  const handleMouseMove = combineHandlers(
    children?.props.onMouseMove,
    !isExited && followCursor && onCursorMove
  );

  return cloneElement(children, {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
    ref: mergeRefs(
      forwardedRef,
      (children as ReactElement & { ref?: Ref<HTMLElement> }).ref
    )
  });
};
