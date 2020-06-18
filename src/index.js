// Import the React and ReactDOM Libraies
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  return (
    <div>
      Hi there!
      <span role="img" aria-label="Hi there!">
        😎
      </span>
    </div>
  );
};

// Take the react component and show it on the screen
//babeljs.io
ReactDOM.render(<App />, document.querySelector("#root"));
