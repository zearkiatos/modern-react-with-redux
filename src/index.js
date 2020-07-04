// Import the React and ReactDOM Libraies
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Comment from "./components/Comment";

// Create a react component
const App = () => {
  const buttonText = {text: 'Click Me'};
  const labelText = 'Enter Name:';
  return (
    <Fragment>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Fragment>
  );
};

// Take the react component and show it on the screen
//babeljs.io
ReactDOM.render(<App />, document.querySelector("#root"));
