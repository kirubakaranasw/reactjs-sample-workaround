import React, { Component } from "react";

const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (
      <ul onClick={onClick}>
        {items.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            onClick={this.handleItemClick.bind(this, item)}
          />
        ))}
      </ul>
    );
  }

  handleItemClick(item, event) {
    event.preventDefault();
    // Write your code here
    console.log(item);
    if (!item.done) {
      console.log("parent call");
      this.props.onItemClick(item, event);
    } else {
      return false;
    }
  }
}

export default TodoList;
