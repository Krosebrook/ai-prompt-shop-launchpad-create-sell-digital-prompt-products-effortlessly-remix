import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook that detects clicks outside of a referenced element
 * Useful for closing dropdowns, modals, and menus
 */
export function useClickOutside<T extends HTMLElement>(
  handler: () => void,
  enabled: boolean = true
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Use mousedown instead of click to catch the event before any focus changes
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler, enabled]);

  return ref;
}

/**
 * Custom hook that detects clicks outside of multiple elements
 * Useful when you have multiple related elements (like a button and its dropdown)
 */
export function useClickOutsideMultiple(
  refs: RefObject<HTMLElement>[],
  handler: () => void,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );

      if (isOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [refs, handler, enabled]);
}
