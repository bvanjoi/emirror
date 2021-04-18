import { startMeasure, stopMeasure } from '@emirror/core-performance';

/**
 * Kind of console.
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * The properties of AnalyticsProvider
 */
export type AnalyticsProps = {
  /**
   * Weather track.
   */
  shouldTrack?: boolean;
  /**
   * Weather console.
   */
  logToConsole?: boolean;
  /**
   * Kind of console.
   */
  logLevel?: LogLevel;
};

/**
 * The bridge between EMirror and Performance.
 */
export class AnalyticsProvider {
  shouldTrack = false;
  logToConsole = false;
  logLevel: LogLevel = 'error';
  logs: {
    [namespace: string]: {
      [key: string]: {
        logs: string[];
        level: LogLevel;
        pending: boolean;
      };
    };
  } = {};

  perf = {
    debug: (namespace: string, method: string) => {
      if (this.hasLevel('debug')) {
        this.measure(namespace, method, 'debug');
      }
    },
    info: (namespace: string, method: string) => {
      if (this.hasLevel('info')) {
        this.measure(namespace, method, 'info');
      }
    },
    warn: (namespace: string, method: string) => {
      if (this.hasLevel('warn')) {
        this.measure(namespace, method, 'warn');
      }
    },
    error: (namespace: string, method: string) => {
      if (this.hasLevel('error')) {
        this.measure(namespace, method, 'error');
      }
    },
    stop: (
      namespace: string,
      method: string,
      durationThreshold = 0
    ) => {
      this.stopMeasure(namespace, method, durationThreshold);
    },
  };

  constructor(props: AnalyticsProps = {}) {
    const { shouldTrack, logToConsole, logLevel } = props;
    if (shouldTrack) {
      this.shouldTrack = shouldTrack;
    }
    if (logToConsole) {
      this.logToConsole = logToConsole;
    }
    if (logLevel) {
      if (logLevel === 'debug') {
        this.logLevel = 'debug';
      } else if (logLevel === 'info') {
        this.logLevel = 'info';
      } else if (logLevel === 'warn') {
        this.logLevel = 'warn';
      } else if (logLevel === 'error') {
        this.logLevel = 'error';
      }
    }
  }

  /**
   *
   * @param level The
   * @returns this.logLevel weather included level param.
   */
  hasLevel(level: LogLevel) {
    const { logLevel } = this;
    switch (level) {
      case 'debug':
        return logLevel === 'debug';
      case 'info':
        return logLevel === 'debug' || logLevel === 'info';
      case 'warn':
        return (
          logLevel === 'debug' ||
          logLevel === 'info' ||
          logLevel === 'warn'
        );
      case 'error':
        return (
          logLevel === 'debug' ||
          logLevel === 'info' ||
          logLevel === 'warn' ||
          logLevel === 'error'
        );
      default:
        return false;
    }
  }

  startLog(namespace: string, method: string, level: LogLevel) {
    if (namespace in this.logs) {
      if (method in this.logs[namespace]) {
        this.logs[namespace][method].pending = true;
      } else {
        this.logs[namespace][method] = {
          logs: [],
          level,
          pending: true,
        };
      }
    } else {
      this.logs[namespace] = {
        [method]: {
          logs: [],
          level,
          pending: true,
        },
      };
    }
  }

  endLog(namespace: string, method: string, msg: string) {
    if (namespace in this.logs) {
      if (method in this.logs[namespace]) {
        this.logs[namespace][method].pending = false;
        this.logs[namespace][method].logs.push(msg);
        const { level } = this.logs[namespace][method];
        console[level](msg);
      } else {
        throw Error(
          `Stopping measurement for namespace ${namespace} with non-existent method: ${method}`
        );
      }
    } else {
      throw Error(`Stopping measurement for namespace ${namespace}`);
    }
  }
  getName(namespace: string, method: string) {
    return `${namespace}::${method}`;
  }

  measure(namespace: string, method: string, level: LogLevel) {
    if (this.shouldTrack && this.logToConsole) {
      this.startLog(namespace, method, level);
      startMeasure(this.getName(namespace, method));
    }
  }

  stopMeasure(
    namespace: string,
    method: string,
    durationThreshold = 0
  ) {
    stopMeasure(
      this.getName(namespace, method),
      (duration, start) => {
        if (
          this.shouldTrack &&
          this.logToConsole &&
          durationThreshold <= duration
        ) {
          const msg = `${this.getName(
            namespace,
            method
          )} took ${Math.round(duration)} ms`;
          this.endLog(namespace, method, msg);
        }
      }
    );
  }
}
