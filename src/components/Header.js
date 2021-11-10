import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead">
        <div className="headerText">
          <p className="title">Fanny Reslow</p>
          <div className="navigation">
            <button>
              <a href="/">Home</a>
            </button>
            <button>
              <a href="/about">About</a>
            </button>
          </div>
        </div>
      </header>
    );
  }
}
