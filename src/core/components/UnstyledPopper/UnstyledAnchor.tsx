import {
  type ForwardedRef,
  type ReactElement,
  type ComponentPropsWithRef,
  type ElementType,
  useRef,
  cloneElement,
  type Ref,
  type MouseEvent
} from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combineHandlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/mergeRefs';
import type { Trigger } from '../../types';
import { getTriggers as getTriggers } from '../../utils/getTriggers/getTriggers';

type Props = {
  ref: ForwardedRef<HTMLElement | null>;
  isOpen: boolean;
  animation: Animation;
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
  animation: { isExited },
  trigger,
  followCursor,
  onOpen,
  onClose,
  onCursorMove,
  children
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  const { clickOpen, clickClose, hoverOpen, hoverClose } = getTriggers(trigger);

  const handleClick = combineHandlers(
    children?.props.onClick,
    !isOpen && clickOpen && onOpen,
    isOpen && clickClose && onClose,
    !isOpen && clickOpen && followCursor && onCursorMove // CHECK !!!
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
      ref,
      forwardedRef,
      (children as ReactElement & { ref?: Ref<HTMLElement> }).ref
    )
  });
};
