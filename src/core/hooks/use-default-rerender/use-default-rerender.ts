import { useState, useEffect } from 'react';

export const useDefaultRerender = (isOpen: boolean) => {
  const [isRerendered, setRerendered] = useState(isOpen);

  useEffect(() => {
    if (isRerendered) {
      setRerendered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
