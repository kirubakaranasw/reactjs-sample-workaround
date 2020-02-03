import React, { Component } from "react";
import ReactDOM from "react-dom";
import Comment from "./components/comment";
import Clock from "./components/clock";
import CustomTextInput from "./components/customTextInput";
import FocusableInput from "./components/focusableInput";
import TodoList from "./components/todoList";
// import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   formatName(user) {
//     return user.firstname + " " + user.lastname;
//   }

//   render() {
//     const user = {
//       firstname: "Test",
//       lastname: "Last"
//     };
//     return (
//       <React.Fragment>
//         <h1>Hello, {this.formatName(user)}!</h1>
//         {}
//       </React.Fragment>
//     );
//   }
// }
// function Welcome(props) {
//   return <h1>Welcome {props.name}</h1>;
// }
// const element = <Welcome name="sr" />;

// // ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(element, document.getElementById("root"));

// const element = (
//   <Comment
//     text="testText"
//     date={new Date().toLocaleDateString()}
//     avatar={avatar}
//   />
// );

// ReactDOM.render(element, document.getElementById("root"));

class App extends Component {
  render() {
    const avatar = {
      name: "testName",
      avatarUrl: "https://picsum.photos/200/300"
    };
    return (
      <React.Fragment>
        <Comment
          text="testText"
          date={new Date().toLocaleDateString()}
          avatar={avatar}
        />
        <Clock interval={5} />
        <Clock />
        <Clock />
      </React.Fragment>
    );
  }
}

// ReactDOM.render(
//   <FocusableInput focused={true} />,
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));

// const items = [
//   { text: "Buy grocery", done: true },
//   { text: "Play guitar", done: false },
//   { text: "Romantic dinner", done: false }
// ];

// ReactDOM.render(
//   <TodoList
//     items={items}
//     onItemClick={(item, event) => {
//       console.log("parent reached");
//       console.log(item, event);
//     }}
//   />,
//   document.getElementById("root")
// );

export default App;

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// export default App;
