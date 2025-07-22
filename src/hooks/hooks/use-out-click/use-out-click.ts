import { type RefObject, useEffect } from 'react';

export const useOutClick = <E extends HTMLElement, T extends HTMLElement>(
  handler?: VoidFunction | false,
  elRef?: RefObject<E | null>,
  triggerRef?: RefObject<T | null>,
  options?: boolean | AddEventListenerOptions
): void =>
  useEffect((): VoidFunction | void => {
    if (!handler || !elRef?.current) {
      return;
    }

    const handleClick = ({ target }: MouseEvent): void => {
      if (!elRef.current || !(target instanceof Node)) {
        return;
      }

      const el = elRef.current;
      const trigger = triggerRef?.current;

      if (
        trigger
          ? !trigger.contains(target) && !el.contains(target)
          : !el.contains(target)
      ) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, options);

    return (): void =>
      document.removeEventListener('click', handleClick, options);
  }, [handler, elRef, triggerRef, options]);
