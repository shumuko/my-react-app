import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    return <li className="todo-list__item" key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="todo-list">
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;
