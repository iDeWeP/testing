import { useState, useEffect } from 'react';

export const useOverflow = (observe: boolean = true): void => {
  const setOverflow = useState(getComputedStyle(document.body).overflow)[1];

  useEffect((): VoidFunction | void => {
    if (!observe) {
      return;
    }

    const el = document.body;
    let prev = getComputedStyle(el).overflow;

    const observer = new MutationObserver((): void => {
      const current = getComputedStyle(el).overflow;

      if (current !== prev) {
        prev = current;
        setOverflow(current);
      }
    });

    observer.observe(el, { attributes: true, attributeFilter: ['style'] });

    return (): void => observer.disconnect();
  }, [observe, setOverflow]);
};
