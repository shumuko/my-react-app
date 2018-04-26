import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./todolist.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []

    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    };

    console.log(this.state.items);

    e.preventDefault();
  }


  render() {
    return (
      <div className="todo-main">
        <div className="todo-main__header">
          <form onSubmit={this.addItem}>
            <input className="todo-main__input" ref={(a) => this._inputElement = a}
              placeholder="enter task">

            </input>
            <button className="todo-main__button" type="submit">add</button>
          </form>
          <TodoItems entries={this.state.items} />
        </div>
      </div>
    );
  }
}

export default TodoList;
