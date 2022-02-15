import { test } from "node:test";
import { deepStrictEqual as equal } from "node:assert";
import {
  createBasicMarks,
  createBasicNodes,
  createSchema,
  createState,
  createPlugins,
} from "@emirror/core";
import * as Utils from "@emirror/core/lib//Utils";
import * as PM from "@emirror/pm";
import * as TestBuilder from "prosemirror-test-builder";

test("Utils", async (t) => {
  const nodes = createBasicNodes();
  const marks = createBasicMarks();
  const schema = createSchema({
    nodes,
    marks,
  });
  const builder = TestBuilder.builders(schema, {
    p: { nodeType: "paragraph" },
    link: { markType: "link", href: "foo" },
  });

  /**
   * @type {TestBuilder.NodeBuilder}
   */
  const doc = builder.doc;

  /**
   * @type {TestBuilder.NodeBuilder}
   */
  const p = builder.p;

  await t.test("isRegularCursor", () => {
    const initDoc = doc(p("hello"));
    const state0 = createState({
      doc: initDoc,
    });
    equal(Utils.isRegularCursor(state0.selection), true);

    const state1 = createState({
      doc: initDoc,
      selection: PM.State.TextSelection.create(initDoc, 2, 5),
    });
    equal(Utils.isRegularCursor(state1.selection), false);
  });

  await t.test("isAtTheBeginning", () => {
    const state0 = createState({
      doc: doc(p("hello")),
    });
    equal(Utils.isAtTheBeginning(state0.selection), true);
    equal(state0.selection.from, 1);
    const state1 = state0.apply(
      state0.tr.setSelection(PM.State.TextSelection.create(state0.doc, 2))
    );
    equal(Utils.isAtTheBeginning(state1.selection), false);
    const state2 = state0.apply(
      state0.tr.setSelection(PM.State.TextSelection.create(state0.doc, 0))
    );
    equal(Utils.isAtTheBeginning(state2.selection), false);
    // TODO: more complicated cases
  });

  await t.test("isThisLineIsEmpty", () => {
    const state0 = createState({ schema });
    equal(Utils.isThisLineIsEmpty(state0.selection.$anchor), true);
    const state1 = state0.apply(state0.tr.insertText("hello"));
    equal(Utils.isThisLineIsEmpty(state1.selection.$anchor), false);
    const initDoc = doc(p("hello"), p(""));
    const state2 = createState({
      doc: initDoc,
      selection: PM.State.TextSelection.create(initDoc, 8),
    });
    console.log(state2.doc.content.child(0))
    equal(Utils.isThisLineIsEmpty(state2.selection.$anchor), true);
    // TODO: more complicated cases
  });
});
