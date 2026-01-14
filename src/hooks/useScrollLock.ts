import { useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to lock/unlock body scroll
 * Useful for modals, drawers, and overlays
 */
export function useScrollLock(isLocked: boolean = false): void {
  useEffect(() => {
    if (!isLocked) return;

    // Save current scroll position and body styles
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollY = window.scrollY;

    // Lock scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      // Unlock scroll and restore position
      document.body.style.overflow = originalStyle;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}

/**
 * Custom hook that returns functions to lock/unlock scroll
 * Provides more control than the automatic version
 */
export function useScrollLockControl(): {
  lock: () => void;
  unlock: () => void;
  isLocked: boolean;
} {
  const scrollPositionRef = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);

  const lock = useCallback(() => {
    if (isLockedRef.current) return;

    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
    isLockedRef.current = true;
  }, []);

  const unlock = useCallback(() => {
    if (!isLockedRef.current) return;

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPositionRef.current);
    isLockedRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isLockedRef.current) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, []);

  return { lock, unlock, isLocked: isLockedRef.current };
}
