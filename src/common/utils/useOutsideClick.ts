import { RefObject, useEffect } from 'react';

export function useOutsideClick(ref: RefObject<any>, callback: () => void) {
  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target)) {
        callback();
      }
    };

    window.addEventListener('click', clickListener);

    return () => window.removeEventListener('click', clickListener);
  }, [ref, callback]);
}
