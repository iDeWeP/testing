import { useState, useEffect } from 'react';

export const useDefaultRerenderation = (isOpen: boolean) => {
  const [isRerendered, setRerendered] = useState(isOpen);

  useEffect(() => {
    if (isRerendered) {
      setRerendered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
