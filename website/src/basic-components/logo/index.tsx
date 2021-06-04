import React from 'react';
import './style.css';

type Props = {
  className?: string;
};

const Logo = (props: Props) => (
  <div {...props}>
    <div className="keyboard">
      <div className="first-two">
        <div className="first-two-left">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
        <div className="first-two-right">
          <div className="block left-up"></div>
          <div className="block enter-block right-up"></div>
          <div className="block enter-block left-down"></div>
          <div className="block enter-block right-down"></div>
        </div>
      </div>
      <div className="third">
        <div className="block shift-block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block shift-block"></div>
      </div>
      <div className="four">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block space-block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </div>
  </div>
);

export default Logo;
