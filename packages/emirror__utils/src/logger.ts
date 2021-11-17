type LogType = 'info' | 'error' | 'warn';
type LogLevel = 'silent' | LogType;

interface Props {
  level: LogLevel;
}

class Logger {

  constructor(private props: Props = { level: 'info' }) {
  }

  private print(...msg: any[]) {
    const { level } = this.props;
    if (level === 'silent') {
      return;
    }
    console[level](...msg);
  }

  silent(...msg: any[]) {
    this.print(msg);
  }

  error(...msg: any[]) {
    this.print(msg);
  }

  warn(...msg: any[]) {
    this.print(msg);
  }

  info(...msg: any[]) {
    this.print(msg);
  }

}

function createLogger(props?: Props) {
  return new Logger(props);
}

export { Logger, createLogger }
