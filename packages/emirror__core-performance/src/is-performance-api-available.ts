/**
 * Is there has Performance API in env?
 */
export const isPerformanceAPIAvailable = () =>
  typeof window !== 'undefined' &&
  'performance' in window &&
  [
    'measure',
    'clearMeasures',
    'clearMarks',
    'getEntriesByName',
    'getEntriesByType',
    'now',
  ].every(api => Boolean((performance as any)[api]));

/**
 * Is there has PerformanceObserver in env?
 */
export const isPerformanceObserverAvailable = () =>
  Boolean(
    typeof window !== 'undefined' && 'PerformanceObserver' in window
  );

/**
 * Is PerformanceObserver support longtask?
 */
export const isPerformanceObserverLongTaskAvailable = () =>
  isPerformanceObserverAvailable() &&
  PerformanceObserver.supportedEntryTypes &&
  PerformanceObserver.supportedEntryTypes.includes('longtask');
