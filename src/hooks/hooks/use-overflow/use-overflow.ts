import { useState, useEffect } from 'react';

export const useOverflow = () => {
  const setOverflow = useState(getComputedStyle(document.body).overflow)[1];

  useEffect(() => {
    const el = document.body;
    let prev = getComputedStyle(el).overflow;

    const observer = new MutationObserver(() => {
      const current = getComputedStyle(el).overflow;

      if (current !== prev) {
        prev = current;
        setOverflow(current);
      }
    });

    observer.observe(el, { attributes: true, attributeFilter: ['style'] });

    return () => observer.disconnect();
  }, [setOverflow]);
};
