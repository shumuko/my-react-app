import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li className="todo-list__item" onClick={ () => this.delete(item.key)}
               key={item.key}>{item.text}</li>
  }

  delete(key){
    this.props.delete(key);
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
