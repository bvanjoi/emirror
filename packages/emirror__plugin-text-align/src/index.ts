import { Extension, GlobalAttrs } from '@emirror/core-structure';
import { updateGlobalAttrs } from '@emirror/core-helpers';
import { Command } from '@emirror/pm/commands';
import { Property } from 'csstype';

type Options = {
  defaultAlignment?: Property.TextAlign;
  scope: string[];
};

class TextAlign extends Extension {
  defaultAlignment: Property.TextAlign;
  scope: string[];

  get name() {
    return 'textAlign' as const;
  }

  constructor(
    options: Options = {
      defaultAlignment: 'left',
      scope: ['paragraph', 'heading'],
    },
  ) {
    super();
    this.scope = options.scope;
    this.defaultAlignment = options.defaultAlignment;
  }

  get commands() {
    return {
      setTextAlign:
        (textAlign: Property.TextAlign): Command =>
        (state, dispatch, view) =>
          this.scope.every(type =>
            updateGlobalAttrs(type, { textAlign })(state, dispatch, view),
          ),
    };
  }

  addGlobalAttrs = (): GlobalAttrs => [
    // text align attrs
    {
      scope: this.scope,
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
