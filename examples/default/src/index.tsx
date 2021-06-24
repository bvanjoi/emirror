import React, { useState } from 'react';
import EMirror from '@emirror/core';
import { EditorView } from '@emirror/pm/view';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import Bold from '@emirror/plugin-bold';
import Code from '@emirror/plugin-code';
import CodeBlock from '@emirror/plugin-code-block';
import Italic from '@emirror/plugin-italic';
import Strike from '@emirror/plugin-strike';
import UnderLine from '@emirror/plugin-underline';
import Blockquote from '@emirror/plugin-blockquote';
import Heading from '@emirror/plugin-heading';
import BulletList from '@emirror/plugin-bullet-list';
import ListItem from '@emirror/plugin-list-item';
import OrderList from '@emirror/plugin-order-list';
import TextBgColor from '@emirror/plugin-text-background-color';
import TextColor from '@emirror/plugin-text-color';
import HR from '@emirror/plugin-hr';
import Menu from './menu';

const DefaultEMirror = () => {
  const [view, setView] = useState<EditorView>(null);

  const plugins = {
    bold: new Bold(),
    code: new Code(),
    codeBlock: new CodeBlock(),
    italic: new Italic(),
    strike: new Strike(),
    underline: new UnderLine(),
    blockquote: new Blockquote(),
    heading: new Heading(),
    orderList: new OrderList(),
    bulletList: new BulletList(),
    hr: new HR(),
    history: new History(),
  };

  return (
    <div>
      {view && <Menu view={view} plugins={plugins} />}
      <EMirror
        afterInit={_view => {
          setView(_view);
        }}
        topNode={new Doc()}
        plugins={[
          new Paragraph(),
          new Text(),
          new ListItem(),
          new TextBgColor(),
          new TextColor(),
          ...Object.values(plugins),
        ]}
      >
        <h4>Hello, This is the default setup of EMirror.</h4>
        <blockquote>
          <p>
            The MiniEMirror only provide basic features, such as enter to
            get a new line, ctrl-A to selection all.
          </p>
          <p>The default setup will provide more practical function.</p>
        </blockquote>
        <p>And in default EMirror, it provider following function:</p>
        <ul>
          <li>
            <p>
              Some text mark: <strong>bold</strong>, <u>underline</u>,
              <span> </span>
              <i>italic</i>, <code>code</code>, <s>strike</s>,
              <span> </span>
              <span data-text-bg-color='#faf594'>
                text background color
              </span>
              ,<span> </span>
              <span data-text-color='#ba4b4b'>text color</span>...
            </p>
            <p>
              And also, EMirror provider some relative markdown shortcut:
              for example, if your input **something**, it will be transfer
              it to
              <span> </span>
              <strong>something</strong>.
            </p>
            <p>
              Meanwhile, it also support key map, if you keydown Ctrl-b,
              and then input, you will find the text is bold font.
            </p>
          </li>
          <li>
            <p>
              And some node, such as the order-list, bullet-list, and
              quote, headings.
            </p>
            <p>
              For example, you can move your cursor to the head of this
              line, and input # and space, you will find this line become
              h1 tag.
            </p>
          </li>
        </ul>
        <p>More features is under development, such as:</p>
        <ol>
          <li>
            <p>Auto link</p>
          </li>
          <li>
            <p>bubble and float menu</p>
          </li>
          <li>
            <p>fantastic input</p>
          </li>
          <li>
            <p>More useful featuers...</p>
          </li>
        </ol>
        <p>
          And in the last, I want to say it again: the aim of EMirror is to
          provider a struct to build modern editor easily, and it will
          provider some examples to exhibit implementation approach.
        </p>
        <p>There has a lots of things to do...</p>
      </EMirror>
    </div>
  );
};

export default DefaultEMirror;
