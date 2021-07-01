import { Extension, GlobalAttrs } from '@emirror/core-structure';
import { Property } from 'csstype';

type Options = {
  defaultAlignment?: Property.TextAlign;
};

class TextAlign extends Extension {
  defaultAlignment: Property.TextAlign;

  get name() {
    return 'textAlign' as const;
  }

  constructor(options: Options = { defaultAlignment: 'left' }) {
    super();
    this.defaultAlignment = options.defaultAlignment;
  }

  addGlobalAttrs = (): GlobalAttrs => [
    // text align attrs
    {
      scope: ['paragraph', 'heading'],
      name: this.name,
      default: this.defaultAlignment,
      parseDOM: (element: HTMLElement) => ({
        [this.name]: element.style.textAlign || this.defaultAlignment,
      }),
      toDOM: attrs => ({ style: `text-align:${attrs[this.name]}` }),
    },
  ];
}

export default TextAlign;
