import React from 'react';
import EMirror from '@emirror/core';
import Doc from '@emirror/plugin-doc';
import Paragraph from '@emirror/plugin-paragraph';
import Text from '@emirror/plugin-text';
import History from '@emirror/plugin-history';
import LatexBasic from '@emirror/plugin-latex-basic';
import LatexInline from '@emirror/plugin-latex-inline';
import LatexBlock from '@emirror/plugin-latex-block';
import Hr from '@emirror/plugin-hr';

const LatexEMirror = () => (
  <EMirror
    topNode={new Doc()}
    plugins={[
      new Paragraph(),
      new Text(),
      new History(),
      new LatexBasic(),
      new LatexBlock(),
      new LatexInline(),
      new Hr(),
    ]}
  >
    <p>
      Latex plugin of EMirror. You can insert an inline-latex using $xxx$,
      or insert block-latex using $$yyy$$.
    </p>
    <p>Following is an example(copy from Wikipedia):</p>
    <hr />
    <p>
      Stirling&apos;s approximation is an approximation for factorials. It
      is a good approximation, leading to accurate results even for small
      values of
      <span className='emirror-latex-inline'>\, n</span>.
    </p>
    <p>The version of the formula typically used in applications of is:</p>
    <div className='emirror-latex-block'>ln n! = nln - n + O(lnn)</div>
    <p>
      (in big O notation, as
      <span className='emirror-latex-inline'>\, n \to \infty</span>), or,
      by changing the base of the logarithm (for instance in the worst-case
      lower bound for comparison sorting),
    </p>
    <div className='emirror-latex-block'>
      log_2 n! = nlog_2 n - nlog_2e + O(log_2 n)
    </div>
    <p>
      Specifying the constant in the
      <span className='emirror-latex-inline'>\, O(lnn)</span>
      error therm gives
      <span className='emirror-latex-inline'>
        \, \frac{1}
        {2} ln(2 \pi n)
      </span>
      , yielding the more precise formula:
    </p>
    <div className='emirror-latex-block'>
      n! ~ \sqrt{'{2 \\pi n}'}(\frac{'{n}'}
      {'{e}'})^n
    </div>
    <p>
      Where the sign <span className='emirror-latex-inline'>\sim</span>{' '}
      means that the two quantities are asymptotic: their ratio tends to 1
      as
      <span className='emirror-latex-inline'>\, n \,</span>
      tends to infinity.
    </p>
    <p>
      One way also give simple bounds valid for all positive integers
      <span className='emirror-latex-inline'>\, n</span>
      rather than only for large
      <span className='emirror-latex-inline'>\, n</span>:
    </p>
    <div className='emirror-latex-block'>
      \sqrt {'{2 \\pi}'} n ^ {'{n + \\frac{1}{2}}'} e ^ {'{-n}'} \le n! \le
      e ^{'{1-n}'} n ^ {'{n + \\frac{1}{2}}'}
    </div>
    <p>
      For <span className='emirror-latex-inline'>n = 1,2,3... </span>
      These follow from the more precise error bounds discussed below.
    </p>
  </EMirror>
);

export default LatexEMirror;
