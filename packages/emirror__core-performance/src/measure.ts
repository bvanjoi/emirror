import { ErrorMsg } from './constants';
import { isPerformanceAPIAvailable } from './is-performance-api-available';

/**
 * The Map to record performance measure.
 */
const measureMap = new Map<string, number>();

export function startMeasure(measureName: string) {
  if (!isPerformanceAPIAvailable()) {
    console.error(ErrorMsg.NOT_AVAILABLE_PERFORMANCE_API);
    return;
  }
  performance.mark(`${measureName}::start`);
  measureMap.set(measureName, performance.now());
}

export function stopMeasure(
  measureName: string,
  onMeasureComplete?: (duration: number, startTime: number) => void
) {
  if (!isPerformanceAPIAvailable()) {
    console.error(ErrorMsg.NOT_AVAILABLE_PERFORMANCE_API);
    return;
  }
  performance.mark(`${measureName}::end`);
  const start = onMeasureComplete ?
    measureMap.get(measureName) :
    undefined;
  try {
    performance.measure(
      measureName,
      `${measureName}::start`,
      `${measureName}::end`
    );
  } catch (err) {
  } finally {
    if (onMeasureComplete) {
      const entry = performance.getEntriesByName(measureName).pop();
      if (entry) {
        onMeasureComplete(entry.duration, entry.startTime);
      } else if (start) {
        onMeasureComplete(performance.now() - start, start);
      }
    }
    clearMeasure(measureName);
  }
}

export function clearMeasure(measureName: string) {
  if (!isPerformanceAPIAvailable()) {
    console.error(ErrorMsg.NOT_AVAILABLE_PERFORMANCE_API);
    return;
  }

  measureMap.delete(measureName);
  performance.clearMarks(`${measureName}::end`);
  performance.clearMarks(`${measureName}::start`);
  performance.clearMarks(measureName);
}
