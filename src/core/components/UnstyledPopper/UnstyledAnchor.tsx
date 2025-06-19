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
    () => console.log('click'),
    !isOpen && clickOpen && onOpen,
    isOpen && clickClose && onClose,
    !isOpen && clickOpen && followCursor && onCursorMove, // CHECK !!!
    children?.props.onClick
  );

  const handleMouseEnter = combineHandlers(
    !isOpen && hoverOpen && onOpen,
    children?.props.onMouseEnter
  );

  const handleMouseLeave = combineHandlers(
    isOpen && hoverClose && onClose,
    children?.props.onMouseLeave
  );

  const handleMouseMove = combineHandlers(
    !isExited && followCursor && onCursorMove,
    children?.props.onMouseMove
  );

  console.log(children);

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
