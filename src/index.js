// Import the React and ReactDOM Libraies
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = {text: 'Click Me'};
  const labelText = 'Enter Name:';
  return (
    <div>
      <label className="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
//babeljs.io
ReactDOM.render(<App />, document.querySelector("#root"));
