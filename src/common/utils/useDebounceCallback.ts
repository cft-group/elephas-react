import { useEffect, useRef, useCallback } from 'react';

export function useDebouncedCallback<T extends Function>(callback: T, delay: number): T {
  const timeoutHandler = useRef<ReturnType<typeof setTimeout>>();

  const cleanup = useCallback(() => {
    if (timeoutHandler.current) {
      clearTimeout(timeoutHandler.current);
    }
  }, [timeoutHandler]);

  useEffect(() => cleanup, [cleanup]);

  const debouncedCallback = useCallback(
    (...args) => {
      cleanup();

      timeoutHandler.current = setTimeout(() => callback(...args), delay);
    }, [cleanup, timeoutHandler, callback, delay],
  );

  return debouncedCallback as any;
}
