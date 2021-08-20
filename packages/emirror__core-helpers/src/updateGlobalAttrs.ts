import { Command } from '@emirror/pm/commands';
import { MarkType, NodeType } from '@emirror/pm/model';
import { getMarkType } from './getMarkType';
import { getNodeType } from './getNodeType';
import { getSchemaTypeNameByName } from './getSchemaTypeNameByName';

export function updateGlobalAttrs(
  typeOrName: string | NodeType | MarkType,
  attrs: Record<string, any> = {},
): Command {
  return (state, _dispatch, view) => {
    const schemaType = getSchemaTypeNameByName(
      typeof typeOrName === 'string' ? typeOrName : typeOrName.name,
      state.schema,
    );

    if (!schemaType) {
      return false;
    }

    let markType: MarkType = null;
    let nodeType: NodeType = null;

    schemaType === 'node'
      ? (nodeType = getNodeType(typeOrName as string, state.schema))
      : (markType = getMarkType(typeOrName as string, state.schema));

    if (view) {
      view.state.tr.selection.ranges.forEach(range => {
        const from = range.$from.pos;
        const to = range.$to.pos;

        view.state.doc.nodesBetween(from, to, (node, pos) => {
          if (nodeType && nodeType === node.type) {
            view.dispatch(
              view.state.tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                ...attrs,
              }),
            );
          }

          if (markType && node.marks.length) {
            node.marks.forEach(mark => {
              if (markType === mark.type) {
                const trimmedFrom = Math.max(pos, from);
                const trimmedTo = Math.min(pos + node.nodeSize, to);

                view.dispatch(
                  view.state.tr.addMark(
                    trimmedFrom,
                    trimmedTo,
                    mark.type.create({
                      ...mark.attrs,
                      ...attrs,
                    }),
                  ),
                );
              }
            });
          }
        });
      });
    }
    return true;
  };
}
