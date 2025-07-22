import { useState, useCallback, useMemo } from 'react';

export type Request<T> = {
  data: T | null;
  isLoading: boolean;
  error: unknown;
};

export type SendFunction = (
  url: RequestInfo | URL,
  requestInit?: RequestInit
) => Promise<void>;

export type UseRequestResult<T> = {
  request: Request<T>;
  send: SendFunction;
};

export const useRequest = <T>(
  data: T | null = null,
  isLoading: boolean = true,
  error: unknown = null
): UseRequestResult<T> => {
  const [request, setRequest] = useState({ data, isLoading, error });

  const send = useCallback<SendFunction>(
    async (url, requestInit): Promise<void> => {
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
    },
    []
  );

  return useMemo(
    (): UseRequestResult<T> => ({ request, send }),
    [request, send]
  );
};
