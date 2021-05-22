import { Node } from '@emirror/core-structure';
import { NodeSpec } from '@emirror/pm/model';
import { wrappingInputRule } from '@emirror/pm/inputrules';
import { toggleList } from '@emirror/plugin-list-item';

class OrderList extends Node {
  get name() {
    return 'orderList' as const;
  }

  get schema(): NodeSpec {
    return {
      attrs: {
        order: { default: 1 },
      },
      content: 'listItem+',
      group: 'block',
      parseDOM: [
        {
          tag: 'ol',
          getAttrs: (dom: HTMLElement) => ({
            order: dom.getAttribute('data-order-start') ?
              parseInt(dom.getAttribute('data-order-start'), 10) :
              1,
          }),
        },
      ],
      toDOM: node =>
        (node.attrs.order === 1 ?
          ['ol', { class: 'emirror-order-li' }, 0] :
          [
            'ol',
            {
              class: 'emirror-order-li',
              'data-order-start': node.attrs.order,
            },
            0,
          ]),
    };
  }

  keymap = ({ type }) => ({
    'Shift-Ctrl-8': toggleList(type, 'listItem'),
  });

  inputRules = ({ type }) => [
    wrappingInputRule(
      /^^(\d+)\.\s$/,
      type,
      match => ({ order: parseInt(match[1], 10) }),
      (match, node) =>
        node.childCount + node.attrs.order === parseInt(match[1], 10)
    ),
  ];
}

export default OrderList;
