export class RenderProvider {
  forceUpdate: () => void;
  state: number;

  constructor(props: { forceUpdate: () => void; state: number }) {
    this.forceUpdate = props.forceUpdate;
    this.state = props.state;
  }

  flush() {
    this.forceUpdate();
  }
}
