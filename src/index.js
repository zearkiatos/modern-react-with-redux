// Import the React and ReactDOM Libraies
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

// Create a react component
const App = () => {
  const buttonText = { text: "Click Me" };
  const labelText = "Enter Name:";
  return (
    <Fragment>
      <div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText.text}
        </button>
      </div>
      <ApprovalCard />
      <Comment
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content={faker.lorem.text()}
      />
      <Comment
        author={faker.name.firstName()}
        timeAgo="Today at 2:00AM"
        avatar={faker.image.avatar()}
        content={faker.lorem.text()}
      />
      <Comment
        author={faker.name.firstName()}
        timeAgo="Yesterday at 5:00PM"
        avatar={faker.image.avatar()}
        content={faker.lorem.text()}
      />
    </Fragment>
  );
};

// Take the react component and show it on the screen
//babeljs.io
ReactDOM.render(<App />, document.querySelector("#root"));
