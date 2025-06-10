import { useState, useCallback, useMemo } from 'react';

export const useRequest = <T>(
  data: T | null = null,
  isLoading: boolean = true,
  error: unknown = null
) => {
  const [request, setRequest] = useState({ data, isLoading, error });

  const send = useCallback(async (url: string, requestInit?: RequestInit) => {
    setRequest({ isLoading: true, data: null, error: null });

    try {
      const response = await fetch(url, requestInit);
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setRequest({
        isLoading: false,
        data,
        error: null
      });
    } catch (error) {
      setRequest({
        isLoading: false,
        data: null,
        error
      });
    }
  }, []);

  return useMemo(() => ({ request, send }), [request, send]);
};
